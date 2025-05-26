
  const words = [
    { word: "Abay", meaning: "at. Qorǵanısh, saqlıq, es, abay-siyasat.", experience: "Sen bilmeysen meniń jayım, Onıń menen teń qudayım, Kerek emes bos abayıń, Tek tur, dedi Aydos baba (Berdaq)." },
    { word: "Abadan", meaning: "kel. Jetkilikli, mol, kóp, qurǵın, barshılıq.", experience: "Xalıq shaǵlap mustaqıl Ózbekstanda, Dúnya tınısh, eller abadan bolsın (I. YUsupov). Ádira qalǵır tuwǵan jer, Bolmaǵan soń abadan (Jiyen jıraw)."},
    { word: "Abay-siyasat", meaning: "at. Kózabaǵa qır kórsetiwshilik.", experience: "Shopanlarǵa kelip, abay-siyasat qılıp, túsingenlerine násiyat aytıp, xannan kelgen jasawıl ne dep turıptı (Ó.Xojaniyazov)."},
    { word: "Abat", meaning: "kel. Barshılıq, molshılıq, toqshılıq, qurǵınlıq, qurǵınlılıq, juqnalılıq, jetkiliklilik, mol, bar, aǵıl-tegil, esap-sansız, tawsılmaytuǵın.", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "Abaylamay", meaning: "r. Sezbey, serlemey, bilmey.", experience: "Oksananıń qaysı esikke kirip ketkenin abaylamay da qaldım (M.Nızanov)." },
    { word: "Abzal", meaning: "r.Jaqsı, durıs, táwir.", experience: "Bul kúyikten frontka ketkenim abzal ǵoy (K.Sultanov)."},
    { word: "Abısın", meaning: "at.Eki aǵayın jigittiń úlkeniniń kelinshegi kishkenesiniń kelinshegine abısın boladı.", experience: "Biziń abısın gáptiń posgellesin aytadı (K.Sultanov)." },
    { word: "Aǵabiy", meaning: "at. Hámel, biylik", experience: "Xalıqtıń úrp-ádetinen qalıp ketken «aǵabiy» oyınları oynaldı (Q.Ayımbetov)." },
    { word: "Adır", meaning: "kel.Tegis emes, jol túspegen, ısılmaǵan.", experience: "Adır-adır tawlardan, Ardaqlay berip qashadı, Gúdir-gúdir qumlardan, Gúdirleydi basadı («Máspatsha»)." },
    { word: "Argotexnika", meaning: "at. Awıl xojalıq eginlerin islewdiń sisteması, diyqanshılıq hám olardı rawajlandırıw sharaları, ilajları.", experience: "Barlıq agrotexnika quralların keńnen qollanıw zárúr (O. Berdimuratov)."},
    { word: "Aǵa-jeńge", meaning: "at. Ózinen úlken aǵası xám onıń xayalı, jası úlken, jası kishi tuwısqanları.", experience: "Qosıbay tubalap, tolǵanıp, aqırı shapandı sandıqtıń tórine tasladı da, bas elshi ózi bolıp, aǵa-jeńgesiniń alıp keldi riyzalıǵın (K.Sultanov)." },
    { word: "Aǵa-ini", meaning: "Tuwısqanlıq qatnastaǵı ul perzentler.", experience: "Dos-yaran, jaqın qatnastaǵı adamlar. Onıń arqa súeri, tuwısqan- tuwǵanları, pútkil kollektivi, (Ó.Ayjanov)."},
    { word: "Aǵalıq", meaning: "Jası úlkenlik, ǵamxorlıq, jol basshılıq, qáwenderlik.", experience: "Jigit boldım kem-kem keldi aǵalıq (T.Jumamuratov)."},
    { word: "Aǵarbulaq", meaning: "Molshılıq, asıp-tasıwshılıq, tawsılmaytuǵın", experience: "Fermamız aǵarbulaq may boladı (K.Sultanov)."},
    { word: "Aǵarǵan", meaning: "Qatıq, sút, ayran", experience: "Qara qoydıń terisi sabınlap juwsań aǵarmas (Q.Ayımbetov)."},
    { word: "Aǵawız", meaning: "Pispegen, shala, waqtı jetpegen, shiyki, tolmaǵan.", experience: "Sen qaraqalpaq, egin qazaq bolǵanda, ketpenlep qalǵanda ekkende, (Kúnxoja)."},
    { word: "Aǵzam", meaning: "Ullı mártebeli, ullı dárejeli", experience: "Quda qálese patsha aǵzam puqaralarına miyrimin salar (K.Sultanov)."},
    { word: "Aǵıl-tegil", meaning: "Molshılıq, mol-molaqay, kóp, dım kóp, jetkilikli.", experience: "Bunnan basqa da onıń sútli sıyırı bolıp, may menen sút aǵıl-tegil edi (S.Ayniy)."},
    { word: "Azǵın", meaning: "Júdew, arıq, eti ketip súyegine taqalǵan, boldırǵan.", experience: "Betinde qan joq, azǵın (T. Qayıpbergenov)."},
    { word: "Azot", meaning: "Tógin, dáris ushın paydalanılatuǵın ximiyalıq element.", experience: "Azottıń, fosfordıń hár gektarǵa qansha ekenin aytıp otırmayman (Q. Dosanov)."},
    { word: "Azsınıw", meaning: "Kemissiniw, kewli pitpew.", experience: "Azsınıp tursız ba aǵa, jigitlerdiń de tabısın kóremiz (K. Sultanov)."},
    { word: "Azbıray", meaning: "Qural-ásbap, qural-sayman, kerek-jaraq.", experience: ""},
    { word: "Azıq", meaning: "Awqat bolatuǵın nárseler.", experience: "Altı qız minip arbaǵa, azıǵın salıp dorbaǵa, aytıw-mereke barmaǵa, qızlar talap etken eken (Berdaq)."},
    { word: "Azıraq", meaning: "Azǵana, shamalı, kishkene, kóp emes.", experience: "Tamaqtan awıstırıp tuqımǵa saqlaǵan azıraq arpa-jazlıq bar edi, - dedi Turımbet (N.Dákaraev)."},
    { word: "Azıw", meaning: "Tanlay tis, úlken tis, ótkir, mıqlı.", experience: "Azıw tislerinen álle qashan ayırılıp qalǵan (J.Aymurzaev)."},
    { word: "Ay", meaning: "Aspan denesi, jerdiń joldası, belgili bir muǵdar ishinde túnge jarıq berip turatuǵın aspan keńisligindegi dene.", experience: "«Esime túser meniń, Suw boyına kelgeniń, «Ay ne ushın jalǵız» dep, sırlı sawal bergeniń... (I.Yusupov)."},
    { word: "Aybalta", meaning: "Baltanıń qural ornına qollanılatuǵın ádette, patshalar qolına alıp otıratuǵın quralı, jaraq.", experience: "Sol waqıtları Surtaysha, Aybaltası qolında, Alarıp turdı ornınan («Qırq qız»)."},
    { word: "Aybaraq", meaning: "Bada-bad, aybat, abay-siyasat.", experience: "Qolǵa uslap jaw-jaraǵın, Salıp bular aybaraǵın, Siltedi barlıq jaraǵın, Qızdı baylap almaqshı eken (Berdaq)."},
    { word: "Aybat", meaning: "Túr-tús, qáhár, saltanat.", experience: "Buzaw iytlerge aybat etti, Perigúl jibermey, moynınan qatıp uslap tur (Ó.Ayjanov)."},
    { word: "Aybatlı", meaning: "Ǵayratlı, qáhárli.", experience: "Atam aybatlı kisi edi (S.Saliev)."},
    { word: "Aybınıw", meaning: "Tartınıw, batına almaw, qorqıw.", experience: "Gá bir qaytpalardan aydarlı ushan keme aydaǵan darǵashılar da aybınıp ótedi (K.Sultanov)."},
    { word: "Ayǵaq", meaning: "Belgi, gúwa, dálil, kórinis.", experience: "Asfalt jolın ıǵbalınıń ayǵaǵı... (I.Yusupov)."},
    { word: "Aydala", meaning: "Alanlıq, ashıqlıq, maydan, elsizlik, adamsız, elsiz, qula dúz.", experience: "Kewli tolıp óz isine Jumannıń, Aydalada kókti gezdi qıyalı (T.Seytjanov)."},
    { word: "Aydar", meaning: "Belgi, jas balalardıń tóbesine qoyılatuǵın bir tal shash, tulım.", experience: "Mamannıń qalpaǵın alıp aydarınan bir súydi (T.Qayıpbergenov)."},
    { word: "Aydın", meaning: "Ashıqlıq, kólat, jazıqlıq, tegislik, tuwra jol, ashıq, taza, keńislik.", experience: "Aydın kólden payda joq, Razı bolmasa kelinde («Er Ziy war»)."},
    { word: "Ayqas", meaning: "Urıs, jekpe-jek, jánjel, gúres.", experience: "Jańa turmıs ushın ayqas jolında, júr edim, ol maǵan jolıqtı sonda (I.Yusupov)."},
    { word: "Aylaw", meaning: "At jarısınıń belgili bir muǵdardaǵı shawıp keletuǵın yamasa shawıp ótetuǵın jer ólshemi.", experience: ""},
    { word: "Aytıs", meaning: "Folklorlıq keyingi janr.", experience: "Usınday házil aytıstan keyin Berdaq penen Ótesh shayır ekewi qattı dos boladı (I.Saǵitov)."},
    { word: "Ayıpker", meaning: "Gúnalı, ayıplı, qılmıslı, ayıpdar.", experience: "Joq men ayıpsız ayıpkermen (A.Bekimbetov)."},
    { word: "Aq jaǵal", meaning: "Ala, ılaqtıń, qozınıń túrine qaray ataw, bas betinde meni bar.", experience: "Japıraq múyiz aq jaǵal, Ol da keldi suw betke (I.Yusupov)."},
    { word: "Aqıy", meaning: "Biy, sher, ózin joqarı sanaytuǵın adam.", experience: "Astında bar torı atı, Belinde gá har polatı, Bolıstıń quyrıq qanatı, Aqsaqalıń aqiy eken (Ájiniyaz)."},
    { word: "Aqkóz", meaning: "Gódek, ańqaw, hadal, hesh nárse kórmegen.", experience: "Munday awır aqkóz batırlardı sol zamandaǵı Xiywa xanı Ispandiyar xan óltirtken (Q.Irmanov)."},
    { word: "Aqsawlaq", meaning: "Qamırdan arnawlı túrde, júdá juqa etip pisirilgen nannıń túri.", experience: ""},
    { word: "Aq siyne", meaning: "Kóksi, kókirek awız, jalańash dene, tóstiń ústi.", experience: "Meniń ózim erke bolsam, Qız jamılǵan kórpe bolsam, Kórpedegi búrge bolsam, Aqsiyneńde jatpas pa edim (Berdaq)."},
    { word: "Aq tal", meaning: "Terektiń túri, túri aq, taza tikensiz, báhárde minár hámme tereklerden burın bórtedi.", experience: "Bálent hawalı aq tallar yanlı Kulen bolıs (Berdaq)."},
    { word: "Aq tiken", meaning: "Bozda ósetuǵın tikenekli shóp.", experience: "Qashqın lám-mim. Aq tikenliktiń arası sılt etpeydi. Tıp-tınısh. Bir shóp qıymıldamaydı (Ó.Xojaniyazov)."},
    { word: "Aqtuba", meaning: "Jerdiń, kóldiń atı, geografiyalıq atama.", experience: "Aqtubanıń aqqan suwı ılaydı, Eki diyqan ún salısıp jılaydı, Qazı iyshanǵa bizdi satqan qudaydı, Diyqan ashtan óler boldı Qazı iyshan («Qazı iyshan»)."},
    { word: "Aq shabaq", meaning: "Balıqtıń bir túri, maydaraq boladı.", experience: "Barıp kórse qazaǵa, aq shabaq penen aqsazan, sıyǵanınsha tolıptı (A.Dabılov)."},
    { word: "Abaq", meaning: "Jılımnıń etegi, sheti, jiyegi.", experience: "Ara-tura salǵan jılım, abaǵım, maylaǵanda úyip keler qabaǵıń (S.Nurımbetov)."},
    { word: "Abıray", meaning: "Ataq, dańq, mártebe.", experience: "Qalqozshılar arasında, rayon aldında iskerlik kútá abıray (K.Dosanov)."},
    { word: "Abaysız", meaning: "Ańlamastan, bayqawsız, bayqamastan, dıqqatsız, sersiz, ańsız, bilmesten, ǵapılda.", experience: "Sonda abaysız kelip demde, birew kózin bastı áste (I.Yusupov)."},
    { word: "Abajur", meaning: "Kúshli jaqtılıq kózdi qamastırmawı hám tiyisli orınǵa ǵana toplanıp túsiwi ushın lampanıń ústine ornatılǵan (gezleme, qaǵaz t. b. nárselerden jasalǵan) qaplama, shıra.", experience: ""},
    { word: "Abonent", meaning: "Abonementke iye bolǵan adam, abonementi bar kisi. Telefonnıń abonenti.", experience: ""},
    { word: "Abort", meaning: "Balanı waqtınan burın operaciya jolı menen alıp taslaw usılı, boydan túsiriw jolı.", experience: ""},
    { word: "Absolyut", meaning: "Idealistlik filosofiya túsiniginde álemniń máńgilik ózgermeytuǵın dáslepki negizi (ruwx, sana).", experience: ""},
    { word: "Abır-sabır", meaning: "Ala topalan, apır-tapır, patırat, ersili-qarsılı, tártipsiz.", },
    { word: "Avans", meaning: "Islegen is haqısınıń ushınan alıw, tolıq emes, belgili muǵdarı, raschyottan burınıraq alatuǵın aqsha.", experience: ""},
    { word: "Avariya", meaning: "Mashina mexanizminiń bir jeriniń buzılıwı, qıyralıw, sátsizlik", experience: ""},
    { word: "Aviabaza", meaning: "Skladları, ońlaw ustaxanaları hám ózlerine tiyisli úskeneler menen támiyinlengen belimleri bar aerodrom.", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    // Bu yerda boshqa 1000 ta so‘zni qo‘shishingiz mumkin...
];

  function searchWord() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredWords = words.filter(word => word.word.toLowerCase().includes(searchTerm));
    displayResults(filteredWords);
  }

  document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchWord();
    }
  });

  function displayResults(wordsList) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    if (wordsList.length === 0) {
      resultsContainer.innerHTML = "<p>Hesh qanday nátiyje tabılmadı.</p>";
      return;
    }

    wordsList.forEach(wordObj => {
      const wordCard = document.createElement("div");
      wordCard.classList.add("word-card");

      wordCard.innerHTML = `
        <div class="word-title">${wordObj.word}</div>
        <div class="word-details">
          <div class="meaning-box"><strong>Mánisi:</strong> ${wordObj.meaning}</div>
          <div class="example-box"><strong>Mısal:</strong> ${wordObj.experience}</div>
        </div>
      `;

      resultsContainer.appendChild(wordCard);
    });
  }
