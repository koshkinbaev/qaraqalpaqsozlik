/**
 * app.js
 * Qaraqalpaq Sózlik — frontend logic extracted from HTML.
 *
 * - Kopiya qilib index.html bilan birga papkaga qo'ying.
 * - Agar sizda alohida so'zlar bazasi (izlew4.js) bo'lsa,
 *   shu fayl index.html ichiga <script src="izlew4.js"></script> orqali yuklansin
 *   (izlew4.js ichida window.DICTIONARY = [ ... ])
 *
 * Bu faylda demo DICTIONARY mavjud bo'ladi agar window.DICTIONARY aniqlanmagan bo'lsa.
 */

(function () {
  'use strict';

  /**********************
   * Demo DICTIONARY (agar tashqi fayl kiritilmagan bo'lsa)
   **********************/
  if (!window.DICTIONARY) {
    window.DICTIONARY = [
      { word: "bilim", meaning: "Oqıw, úyreniw arqalı alınǵan maǵlıwmat.", example: "Bilim — insannıń baylıǵı." },
      { word: "kitap", meaning: "Oqıw úshin basılǵan yaki elektron mátin.", example: "Men kitap oqıwdı jaqsı kóremin." },
      { word: "student", meaning: "Universitet yaki kollejde oqıytın adam.", example: "Studentler imtihanǵa tayarlanıwda." },
      { word: "sálem", meaning: "Amándıq sorasıw, qarsı alıw sózi.", example: "Sálem! Qalay?!" },
      { word: "mádeniyat", meaning: "Xalıqtıń ruwxıy hám materiallıq baylıqları.", example: "Mádeniyat — ulıw xazına." },
    ];
  }

  /**********************
   * STORAGE KALITLARI
   **********************/
  const LS = {
    theme: "qsoz_theme",
    favorites: "qsoz_favorites",
    history: "qsoz_history",
    searchesTotal: "qsoz_searches_total",
    searchesWeekly: "qsoz_searches_weekly",
    weekKey: "qsoz_week_key"
  };

  /**********************
   * UTIL
   **********************/
  const $ = (s) => document.querySelector(s);

  function escapeHtml(str = "") {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toast(msg, icon = "✅") {
    const t = $("#toast");
    if (!t) return console.warn("Toast element not found");
    t.innerHTML = `<span style="margin-right:8px">${icon}</span><span style="line-height:1.35">${escapeHtml(msg)}</span>`;
    t.style.display = "inline-flex";
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => (t.style.display = "none"), 2200);
  }

  function getWeekKey(d = new Date()) {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    const y = date.getUTCFullYear();
    return `${y}-W${String(weekNo).padStart(2, "0")}`;
  }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }
  function saveJSON(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  function safeFileName(s) {
    return (s || "soz").toString().trim().replace(/[\\\/:*?"<>|]/g, "_");
  }

  function downloadText(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    // revoke after use
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  function normalizeKey(s) {
    return (s || "").toString().trim().toLowerCase();
  }

  /**********************
   * STATE
   **********************/
  const dict = window.DICTIONARY || [];
  const state = {
    favorites: new Set(loadJSON(LS.favorites, [])),
    history: loadJSON(LS.history, []),
    totalCounts: loadJSON(LS.searchesTotal, {}),
    weeklyAll: loadJSON(LS.searchesWeekly, {}),
    currentWeek: getWeekKey(),
    auto: true,
    contains: true,
    caseInsensitive: true
  };

  if (!state.weeklyAll[state.currentWeek]) state.weeklyAll[state.currentWeek] = {};

  /**********************
   * RENDER HELPERS
   **********************/
  function updateStats() {
    const elWords = $("#statWords");
    const elFav = $("#statFav");
    const elWeek = $("#statWeek");
    if (elWords) elWords.textContent = dict.length;
    if (elFav) elFav.textContent = state.favorites.size;
    const w = state.weeklyAll[state.currentWeek] || {};
    const totalThisWeek = Object.values(w).reduce((a, b) => a + b, 0);
    if (elWeek) elWeek.textContent = totalThisWeek;
  }

  function renderHistory() {
    const box = $("#historyList");
    if (!box) return;
    if (!state.history.length) {
      box.innerHTML = `<div class="empty">Tarix bo‘sh. So‘z izlep kóriń 🙂</div>`;
      return;
    }
    box.innerHTML = state.history.slice(0, 12).map(w => `
      <div class="row">
        <div class="left">
          <b>${escapeHtml(w)}</b>
          <span>Tarixdan izlew</span>
        </div>
        <button data-go="${escapeHtml(w)}">Izlew</button>
      </div>
    `).join("");

    box.querySelectorAll("button[data-go]").forEach(btn => {
      btn.addEventListener("click", () => {
        const w = btn.getAttribute("data-go");
        const si = $("#searchInput");
        if (si) si.value = w;
        search();
      });
    });
  }

  function topListFromCounts(countsObj, limit = 6) {
    return Object.entries(countsObj || {})
      .sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]))
      .slice(0, limit);
  }

  function renderTrending() {
    const box = $("#trendingList");
    if (!box) return;
    const top = topListFromCounts(state.totalCounts, 6);
    if (!top.length) {
      box.innerHTML = `<div class="empty">Házirshe trending joq. Izlewler baslanǵannan keyin kórinedi 🔥</div>`;
      return;
    }
    box.innerHTML = top.map(([w, c]) => `
      <div class="row">
        <div class="left">
          <b>${escapeHtml(w)}</b>
          <span>Umumiy qidiruv</span>
        </div>
        <div class="count">${c}</div>
        <button data-go="${escapeHtml(w)}">Izlew</button>
      </div>
    `).join("");

    box.querySelectorAll("button[data-go]").forEach(btn => {
      btn.addEventListener("click", () => {
        const w = btn.getAttribute("data-go");
        const si = $("#searchInput");
        if (si) si.value = w;
        search();
      });
    });
  }

  function renderWeekly() {
    const box = $("#weeklyList");
    if (!box) return;
    const weekCounts = state.weeklyAll[state.currentWeek] || {};
    const top = topListFromCounts(weekCounts, 6);
    if (!top.length) {
      box.innerHTML = `<div class="empty">Bu haftada izlew joq. Birinchi sózdi izlep kóriń 🏆</div>`;
      return;
    }
    box.innerHTML = top.map(([w, c], idx) => `
      <div class="row">
        <div class="left">
          <b>${idx + 1}. ${escapeHtml(w)}</b>
          <span>Haftalik reyting</span>
        </div>
        <div class="count">${c}</div>
        <button data-go="${escapeHtml(w)}">Izlew</button>
      </div>
    `).join("");

    box.querySelectorAll("button[data-go]").forEach(btn => {
      btn.addEventListener("click", () => {
        const w = btn.getAttribute("data-go");
        const si = $("#searchInput");
        if (si) si.value = w;
        search();
      });
    });
  }

  function renderResults(items) {
    const r = $("#results");
    const rc = $("#resultCount");
    if (rc) rc.textContent = `${items.length} ta`;
    if (!r) return;

    if (!items.length) {
      r.innerHTML = `
        <div class="empty">
          Natije tabılmadı. ✅
          <div style="margin-top:10px">
            Maslahat: so‘zni qisqartirib ko‘riń yoki <b>Ichidan izlew</b>ni yoqıp qo‘yiń.
          </div>
        </div>`;
      return;
    }

    r.innerHTML = items.map(item => {
      const term = item.word || item.term || "";
      const meaning = item.meaning || item.meanings || item.desc || "";
      const example = item.example || item.examples || "";
      const isFav = state.favorites.has(normalizeKey(term));

      return `
        <div class="card">
          <div class="word">
            <div class="term">${escapeHtml(term)}</div>
            <div class="meta">
              <span class="badge">Sóz</span>
              ${isFav ? `<span class="badge" style="border-color:rgba(46,229,157,.35); background:rgba(46,229,157,.12)">Saqlang'an</span>` : ``}
            </div>
          </div>
          <div class="details">
            <div class="box">
              <strong>Máni:</strong>
              <p>${escapeHtml(meaning)}</p>
            </div>
            <div class="box">
              <strong>Mısal:</strong>
              <p>${escapeHtml(example || "—")}</p>
            </div>

            <div class="card-actions">
              <div class="btn2 fav ${isFav ? "active" : ""}" data-fav="${escapeHtml(term)}" title="Saqlaw / Saqlawdan shıǵarıw">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.5-9.5-8.5C.7 9.4 2.3 6 6.1 6c2 0 3.2 1 3.9 2 .7-1 1.9-2 3.9-2 3.8 0 5.4 3.4 3.6 6.5C19 16.5 12 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                Saqlaw
              </div>

              <div class="btn2" data-copy="${escapeHtml(term)}">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 9h10v10H9V9Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Kopiya
              </div>

              <div class="btn2" data-savefile="${escapeHtml(term)}">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v10m0 0 4-4m-4 4-4-4M4 17v3h16v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                TXT
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // attach handlers
    r.querySelectorAll("[data-fav]").forEach(btn => {
      btn.addEventListener("click", () => {
        const term = btn.getAttribute("data-fav");
        toggleFavorite(term);
        search(false);
      });
    });

    r.querySelectorAll("[data-copy]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const term = btn.getAttribute("data-copy");
        const item = dict.find(x => normalizeKey(x.word) === normalizeKey(term));
        const text = item
          ? `${item.word}\nMánisi: ${item.meaning}\nMısal: ${item.example || "-"}`
          : term;
        try {
          await navigator.clipboard.writeText(text);
          toast("Kopiya qilindi!");
        } catch {
          toast("Kopiya qilishda xatolik", "⚠️");
        }
      });
    });

    r.querySelectorAll("[data-savefile]").forEach(btn => {
      btn.addEventListener("click", () => {
        const term = btn.getAttribute("data-savefile");
        const item = dict.find(x => normalizeKey(x.word) === normalizeKey(term));
        if (!item) { toast("Topilmadi", "⚠️"); return; }
        const content = `${item.word}\n\nMánisi:\n${item.meaning}\n\nMısal:\n${item.example || "-"}`;
        downloadText(`${safeFileName(item.word)}.txt`, content);
        toast("TXT yuklab olindi!");
      });
    });
  }

  /**********************
   * SEARCH + COUNTERS
   **********************/
  function recordSearch(term) {
    const key = normalizeKey(term);
    if (!key) return;

    state.history = [term, ...state.history.filter(x => normalizeKey(x) !== key)].slice(0, 12);
    saveJSON(LS.history, state.history);

    state.totalCounts[key] = (state.totalCounts[key] || 0) + 1;
    saveJSON(LS.searchesTotal, state.totalCounts);

    const current = getWeekKey();
    state.currentWeek = current;
    if (!state.weeklyAll[current]) state.weeklyAll[current] = {};
    state.weeklyAll[current][key] = (state.weeklyAll[current][key] || 0) + 1;
    saveJSON(LS.searchesWeekly, state.weeklyAll);
  }

  function matchItems(query) {
    const q = query || "";
    const contains = state.contains;
    const ci = state.caseInsensitive;

    const qN = ci ? q.toLowerCase().trim() : q.trim();
    if (!qN) return [];

    return dict.filter(item => {
      const w = (item.word || item.term || "").toString();
      const wN = ci ? w.toLowerCase() : w;
      if (contains) return wN.includes(qN);
      return wN === qN;
    });
  }

  function search(shouldRecord = true) {
    const input = $("#searchInput");
    const q = input ? input.value.trim() : "";
    if (!q) {
      const hint = $("#hintText");
      if (hint) hint.textContent = "Sóz kiritiń 🙂";
      renderResults([]);
      return;
    }
    const items = matchItems(q);
    renderResults(items);

    const hint = $("#hintText");
    if (hint) hint.textContent = items.length ? `Tabıldı: ${items.length} ta ✅` : `Tabılmadı ❌`;

    if (shouldRecord) {
      recordSearch(q);
      renderHistory();
      renderTrending();
      renderWeekly();
      updateStats();
    }
  }

  /**********************
   * FAVORITES
   **********************/
  function toggleFavorite(term) {
    const key = normalizeKey(term);
    if (!key) return;
    if (state.favorites.has(key)) {
      state.favorites.delete(key);
      toast("Saqlanganlardan óshirildi", "💾");
    } else {
      state.favorites.add(key);
      toast("Saqlandı", "💚");
    }
    saveJSON(LS.favorites, [...state.favorites]);
    updateStats();
  }

  function openSaved() {
    const favs = [...state.favorites];
    if (!favs.length) {
      toast("Saqlanganlar bo‘sh", "ℹ️");
      return;
    }
    const items = dict.filter(x => state.favorites.has(normalizeKey(x.word)));
    const si = $("#searchInput");
    if (si) si.value = "";
    renderResults(items);
    const hint = $("#hintText");
    if (hint) hint.textContent = "Saqlanganlar kórsetildi 💾";
    toast("Saqlanganlar ochildi", "💾");
  }

  /**********************
   * THEME
   **********************/
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LS.theme, theme);
  }
  function initTheme() {
    const saved = localStorage.getItem(LS.theme);
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      // prefer dark by default
      setTheme("dark");
    }
  }

  /**********************
   * EXPORT / CLEAR
   **********************/
  function exportFavorites() {
    const items = dict.filter(x => state.favorites.has(normalizeKey(x.word)));
    if (!items.length) {
      toast("Export qilish uchun saqlanganlar yo‘q", "⚠️");
      return;
    }
    const json = JSON.stringify(items, null, 2);
    downloadText("qaraqalpaq_sozlik_favorites.json", json);
    toast("Export tayyor ✅");
  }

  function clearHistory() {
    state.history = [];
    saveJSON(LS.history, state.history);
    renderHistory();
    toast("Tarix tozalandi", "🧹");
  }

  function resetWeek() {
    state.weeklyAll[state.currentWeek] = {};
    saveJSON(LS.searchesWeekly, state.weeklyAll);
    renderWeekly();
    updateStats();
    toast("Haftalik reyting 0 qilindi", "🏆");
  }

  function clearAll() {
    if (!confirm("Rostan ham tarix, trending va haftalik reytingni tozalaysizmi?")) return;
    localStorage.removeItem(LS.history);
    localStorage.removeItem(LS.searchesTotal);
    localStorage.removeItem(LS.searchesWeekly);
    state.history = [];
    state.totalCounts = {};
    state.weeklyAll = {};
    state.weeklyAll[state.currentWeek] = {};
    renderHistory(); renderTrending(); renderWeekly(); updateStats();
    toast("Tozalandi", "🧹");
  }

  /**********************
   * INIT
   **********************/
  function init() {
    initTheme();

    // toggles
    const tAuto = $("#toggleAuto");
    const tContains = $("#toggleContains");
    const tCase = $("#toggleCase");
    if (tAuto) tAuto.addEventListener("change", e => state.auto = e.target.checked);
    if (tContains) tContains.addEventListener("change", e => { state.contains = e.target.checked; search(false); });
    if (tCase) tCase.addEventListener("change", e => { state.caseInsensitive = e.target.checked; search(false); });

    // search buttons / input
    const btnSearch = $("#btnSearch");
    if (btnSearch) btnSearch.addEventListener("click", () => search(true));
    const input = $("#searchInput");
    if (input) {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") search(true);
      });
      input.addEventListener("input", () => {
        if (state.auto) search(true);
      });
    }

    // quick focus Ctrl/⌘+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const si = $("#searchInput");
        if (si) si.focus();
      }
    });

    // header buttons
    const btnTheme = $("#btnTheme");
    if (btnTheme) btnTheme.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
      toast("Tema o‘zgardi");
    });

    const btnExport = $("#btnExport");
    if (btnExport) btnExport.addEventListener("click", exportFavorites);

    const btnClearAll = $("#btnClearAll");
    if (btnClearAll) btnClearAll.addEventListener("click", clearAll);

    // sidebar buttons
    const btnRefreshTrending = $("#btnRefreshTrending");
    if (btnRefreshTrending) btnRefreshTrending.addEventListener("click", () => { renderTrending(); toast("Yangilandi"); });
    const btnResetWeek = $("#btnResetWeek");
    if (btnResetWeek) btnResetWeek.addEventListener("click", resetWeek);
    const btnClearHistory = $("#btnClearHistory");
    if (btnClearHistory) btnClearHistory.addEventListener("click", clearHistory);
    const btnOpenSaved = $("#btnOpenSaved");
    if (btnOpenSaved) btnOpenSaved.addEventListener("click", openSaved);

    // initial render
    updateStats();
    renderHistory();
    renderTrending();
    renderWeekly();
    renderResults([]);
    const hint = $("#hintText");
    if (hint) hint.textContent = "Tayyor ✅";
  }

  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
