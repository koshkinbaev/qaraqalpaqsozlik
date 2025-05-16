// script.js

const songs = [
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
  { title: "Babay", artist: "", category: "folk", file: "Babay.m4a" },
  { title: "Badam", artist: "", category: "folk", file: "Badam.m4a" },
  { title: "Badıya", artist: "", category: "folk", file: "Badıya.m4a" },
  { title: "Baja", artist: "", category: "folk", file: "Baja.m4a" },
  { title: "Bajban", artist: "", category: "folk", file: "Bajban.m4a" },
  { title: "Bajı", artist: "", category: "folk", file: "Bajı.m4a" },
  { title: "Bay", artist: "", category: "folk", file: "Bay.m4a" },
  { title: "Baysımaq", artist: "", category: "folk", file: "Baysımaq.m4a" },
  { title: "Baytal", artist: "", category: "folk", file: "Baytal.m4a" },
  { title: "Baysıraw", artist: "", category: "folk", file: "Baysıraw.m4a" },
  { title: "Bayǵus", artist: "", category: "folk", file: "Bayǵus.m4a" },
  { title: "Bazar", artist: "", category: "folk", file: "Bazar.m4a" },
  { title: "Bazda", artist: "", category: "folk", file: "Bazda.m4a" },
  { title: "Baǵ-dáwlet", artist: "", category: "folk", file: "Baǵ-dáwlet.m4a" },
  { title: "Baǵ", artist: "", category: "folk", file: "Baǵ.m4a" },
  { title: "Baǵana", artist: "", category: "folk", file: "Baǵana.m4a" },
  { title: "Baǵdar", artist: "", category: "folk", file: "Baǵdar.m4a" },
  { title: "Baǵdarlama", artist: "", category: "folk", file: "Baǵdarlama.m4a" },
  { title: "Baǵman", artist: "", category: "folk", file: "Baǵman.m4a" },
  { title: "Baǵındırıw", artist: "", category: "folk", file: "Baǵındırıw.m4a" },
  { title: "Dabıl", artist: "", category: "jaz", file: "Dabıl.m4a" },
  { title: "Dadlaw", artist: "", category: "jaz", file: "Dadlaw.m4a" },
  { title: "Dal", artist: "", category: "jaz", file: "Dal.m4a" },
  { title: "Dala", artist: "", category: "jaz", file: "Dala.m4a" },
  { title: "Dambal", artist: "", category: "jaz", file: "Dambal.m4a" },
  { title: "Dana", artist: "", category: "jaz", file: "Dana.m4a" },
  { title: "Daq", artist: "", category: "jaz", file: "Daq.m4a" },
  { title: "Daqıl", artist: "", category: "jaz", file: "Daqıl.m4a" },
  { title: "Daǵal", artist: "", category: "jaz", file: "Daǵal.m4a" },
  { title: "Daǵaza", artist: "", category: "jaz", file: "Daǵaza.m4a" },
  { title: "Daǵı", artist: "", category: "jaz", file: "Daǵı.m4a" },
  { title: "Daǵıstan", artist: "", category: "jaz", file: "Daǵıstan.m4a" },
  { title: "Ebelek", artist: "", category: "music", file: "Ebelek.m4a" },
  { title: "Ebetey", artist: "", category: "music", file: "Ebetey.m4a" },
  { title: "Ebindey", artist: "", category: "music", file: "Ebindey.m4a" },
  { title: "Eginshi", artist: "", category: "music", file: "Eginshi.m4a" },
  { title: "Egis", artist: "", category: "music", file: "Egis.m4a" },
  { title: "Ekiqabat", artist: "", category: "music", file: "Ekiqabat.m4a" },
  { title: "Ekshembi", artist: "", category: "music", file: "Ekshembi.m4a" },
  { title: "Elat", artist: "", category: "music", file: "Elat.m4a" },
  { title: "Ezben", artist: "", category: "music", file: "Ezben.m4a" },
  { title: "Eziw", artist: "", category: "music", file: "Eziw.m4a" },
  { title: "Galstuk", artist: "", category: "classic", file: "Galstuk.m4a" },
  { title: "Gametalar", artist: "", category: "classic", file: "Gametalar.m4a" },
  { title: "Gamma", artist: "", category: "classic", file: "Gamma.m4a" },
  { title: "Gandbol", artist: "", category: "classic", file: "Gandbol.m4a" },
  { title: "Gangster", artist: "", category: "classic", file: "Gangster.m4a" },
  { title: "Gansh", artist: "", category: "classic", file: "Gansh.m4a" },
  { title: "Garaj", artist: "", category: "classic", file: "Garaj.m4a" },
  { title: "Garantiya", artist: "", category: "classic", file: "Garantiya.m4a" },
  { title: "Garderov", artist: "", category: "classic", file: "Garderov.m4a" },
  { title: "Gayka", artist: "", category: "classic", file: "Gayka.m4a" },
  { title: "Gazeta", artist: "", category: "classic", file: "Gazeta.m4a" },
  { title: "Gazetashı", artist: "", category: "classic", file: "Gazetashı.m4a" },
  { title: "Ǵajaw", artist: "", category: "jozeff", file: "Ǵajaw.m4a" },
  { title: "Ǵajıw", artist: "", category: "jozeff", file: "Ǵajıw.m4a" },
  { title: "Ǵarǵa", artist: "", category: "jozeff", file: "Ǵarǵa.m4a" },
  { title: "Ǵaylı", artist: "", category: "jozeff", file: "Ǵaylı.m4a" },
  { title: "Ǵayrat", artist: "", category: "jozeff", file: "Ǵayrat.m4a" },
  { title: "Ǵayrı", artist: "", category: "jozeff", file: "Ǵayrı.m4a" },
  { title: "Ǵayzaw", artist: "", category: "jozeff", file: "Ǵayzaw.m4a" },
  { title: "Ǵayıp", artist: "", category: "jozeff", file: "Ǵayıp.m4a" },
  { title: "Ǵazep", artist: "", category: "jozeff", file: "Ǵazep.m4a" },
  { title: "Ǵazna", artist: "", category: "jozeff", file: "Ǵazna.m4a" },

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
