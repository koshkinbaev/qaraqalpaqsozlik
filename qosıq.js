// script.js

const songs = [
    { title: "Abaylaw", category: "modern", file: "songs/Abaylaw.m4a" },
        { title: "Abbazı", category: "modern", file: "songs/Abbazı.m4a" },
            { title: "Agronomiya", category: "modern", file: "songs/Agronomiya.m4a" },
  { title: "Abaylaw", artist: "", category: "modern", file: "songs/Abaylaw.m4a" },


  { title: "Jalg'an muxabbat", artist: " Islam Muratbaev", category: "folk", file: "Jalg'an muxabbat.m4a" },
  { title: "Men seni söyemin", artist: "Zhanarbek", category: "modern", file: "songs/menseni.mp3" },
  { title: "Ana kel", artist: "Dilnaz", category: "classic", file: "ana.mp3" },
  { title: "Ay Yar", artist: "Aybek", category: "modern", file: "songs/ayyar.mp3" },
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
