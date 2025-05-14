// script.js

const songs = [
  { title: "Jalg'an muxabbat", artist: " Islam Muratbaev", category: "folk", file: "Jalg'an muxabbat.m4a" },
  { title: "Abarıya", artist: "", category: "modern", file: "Abarıya.m4a" },
  { title: "Abaylaw", artist: "", category: "modern", file: "Abaylaw.m4a" },
  { title: "Abbazı", artist: "", category: "modern", file: "Abbazı.m4a" },
  { title: "Abıray", artist: "", category: "modern", file: "Abıray.m4a" },
  { title: "Abırjı", artist: "", category: "modern", file: "Abırjı.m4a" },
  { title: "Abısın", artist: "", category: "modern", file: "Abısın.m4a" },
  { title: "Agent", artist: "", category: "modern", file: "Agent.m4a" },
  { title: "Agronom", artist: "", category: "modern", file: "Agronom.m4a" },
  { title: "Avans", artist: "", category: "modern", file: "Avans.m4a" },
  { title: "Avgust", artist: "", category: "modern", file: "Avgust.m4a" },
  { title: "Avtobus", artist: "", category: "modern", file: "Avtobus.m4a" },
  { title: "Aǵa-ini", artist: "", category: "modern", file: "Aǵa-ini.m4a" },
  { title: "Aǵalıq", artist: "", category: "modern", file: "Aǵalıq.m4a" },
  { title: "Aǵarbulaq", artist: "", category: "modern", file: "Aǵarbulaq.m4a" },
  { title: "Aǵarǵan", artist: "", category: "modern", file: "Aǵarǵan.m4a" },
  { title: "Aǵawız", artist: "", category: "modern", file: "Aǵawız.m4a" },
  { title: "Aǵay", artist: "", category: "modern", file: "Aǵay.m4a" },
  { title: "Aǵayın", artist: "", category: "modern", file: "Aǵayın.m4a" },
  { title: "Aǵla", artist: "", category: "modern", file: "Aǵla.m4a" },
  { title: "Aǵza", artist: "", category: "modern", file: "Aǵza.m4a" },
  { title: "Aǵzam", artist: "", category: "modern", file: "Aǵzam.m4a" },  
  { title: "Ana kel", artist: "Dilnaz", category: "classic", file: "ana.mp3" },
  { title: "Ay Yar", artist: "Aybek", category: "modern", file: "songs/ayyar.mp3" },
  { title: "Babay", artist: " Islam Muratbaev", category: "folk", file: "Babay.m4a" },
  { title: "Badam", artist: " Islam Muratbaev", category: "folk", file: "Badam.m4a" },
  { title: "Badıya", artist: " Islam Muratbaev", category: "folk", file: "Badıya.m4a" },
  { title: "Baja", artist: " Islam Muratbaev", category: "folk", file: "Baja.m4a" },
  { title: "Bajban", artist: " Islam Muratbaev", category: "folk", file: "Bajban.m4a" },
  { title: "Bajı", artist: " Islam Muratbaev", category: "folk", file: "Bajı.m4a" },
  { title: "Bay", artist: " Islam Muratbaev", category: "folk", file: "Bay.m4a" },
  { title: "Baysımaq", artist: " Islam Muratbaev", category: "folk", file: "Baysımaq.m4a" },
  { title: "Baytal", artist: " Islam Muratbaev", category: "folk", file: "Baytal.m4a" },
  { title: "Boz Oyg‘ar", artist: "Unknown", category: "folk", file: "songs/bozoigar.mp3" },
  // ✳️ Shu tarzda 100 ta qo‘shiq qo‘shiladi
];

function loadSongs(filter = 'all') {
  const list = document.getElementById('songList');
  list.innerHTML = '';

  const searchQuery = document.getElementById('searchInput').value.toLowerCase();

  songs.filter(song => {
    const matchCategory = filter === 'all' || song.category === filter;
    const matchSearch = song.title.toLowerCase().includes(searchQuery) || 
                        song.artist.toLowerCase().includes(searchQuery) || 
                        song.category.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  }).forEach(song => {
    const el = document.createElement('div');
    el.className = 'song';
    el.innerHTML = `<strong>${song.title}</strong><br><em>${song.artist}</em>
      <audio controls>
        <source src="${song.file}" type="audio/mp3">
        Sizning brauzeringiz audio pleerni qo‘llab-quvvatlamaydi.
      </audio>`;
    list.appendChild(el);
  });
}

function filterSongs(category) {
  loadSongs(category);
}

document.getElementById('searchInput').addEventListener('input', () => loadSongs());

window.onload = () => {
  loadSongs();
};
