<!DOCTYPE html>
<html>
<head>
  <title>Firebase Auth - Ro'yxatdan o'tish va Kirish</title>

  <!-- Firebase compat versiyalarini chaqirish -->
  <script src="https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.11.0/firebase-auth-compat.js"></script>
</head>
<body>
  <h2>Ro'yxatdan o'tish</h2>
  <input type="email" id="signup-email" placeholder="Email">
  <input type="password" id="signup-password" placeholder="Parol">
  <button onclick="signUp()">Ro'yxatdan o'tish</button>

  <h2>Kirish</h2>
  <input type="email" id="login-email" placeholder="Email">
  <input type="password" id="login-password" placeholder="Parol">
  <button onclick="signIn()">Kirish</button>

  <h2>Yoki Google orqali kirish</h2>
  <button onclick="googleSignIn()">Google bilan kirish</button>

  <br><br>
  <button onclick="signOut()">Chiqish</button>

  <p id="user-info">Foydalanuvchi holati yuklanmoqda...</p>

  <script>
    // ✅ Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyBswBMDpNPgfpaOqY4S8Vu0PVLkFEqrjkk",
      authDomain: "dizimnen-otiw.firebaseapp.com",
      projectId: "dizimnen-otiw",
      storageBucket: "dizimnen-otiw.firebasestorage.app",
      messagingSenderId: "254101190553",
      appId: "1:254101190553:web:446332fe4c63973ea4c508",
      measurementId: "G-Y6JEDTY148"
    };

    // 🔧 Firebase’ni ishga tushirish
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // 🟢 Ro‘yxatdan o‘tish
    function signUp() {
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          alert("✅ Ro‘yxatdan muvaffaqiyatli o‘tildi");
        })
        .catch(error => alert("❌ " + error.message));
    }

    // 🟢 Kirish
    function signIn() {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          alert("✅ Tizimga muvaffaqiyatli kirildi");
        })
        .catch(error => alert("❌ " + error.message));
    }

    // 🟢 Google bilan kirish
    function googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then(result => {
          alert("✅ Google orqali kirildi: " + result.user.email);
        })
        .catch(error => alert("❌ " + error.message));
    }

    // 🔴 Chiqish
    function signOut() {
      auth.signOut()
        .then(() => alert("✅ Tizimdan chiqildi"));
    }

    // 🔄 Foydalanuvchi holatini tekshirish
    auth.onAuthStateChanged(user => {
      const info = document.getElementById('user-info');
      if (user) {
        info.textContent = `🟢 Tizimga kirgan foydalanuvchi: ${user.email}`;
      } else {
        info.textContent = "🔴 Foydalanuvchi tizimga kirmagan";
      }
    });
  </script>
</body>
</html>
