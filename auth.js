// Firebase config - BU YERGA O'ZINGIZNING CONFIG'NI QO'YING
  <script>
    const firebaseConfig = {
  apiKey: "AIzaSyBswBMDpNPgfpaOqY4S8Vu0PVLkFEqrjkk",
  authDomain: "dizimnen-otiw.firebaseapp.com",
  projectId: "dizimnen-otiw",
  storageBucket: "dizimnen-otiw.firebasestorage.app",
  messagingSenderId: "254101190553",
  appId: "1:254101190553:web:446332fe4c63973ea4c508",
  measurementId: "G-Y6JEDTY148"
};
// Firebase'ni ishga tushirish
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Ro‘yxatdan o‘tish
    function signUp() {
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          alert("Ro‘yxatdan muvaffaqiyatli o‘tildi");
        })
        .catch(error => alert(error.message));
    }

    // Kirish
    function signIn() {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          alert("Tizimga muvaffaqiyatli kirildi");
        })
        .catch(error => alert(error.message));
    }

    // Google orqali kirish
    function googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then(result => {
          alert("Google orqali kirildi: " + result.user.email);
        })
        .catch(error => alert(error.message));
    }

    // Tizimdan chiqish
    function signOut() {
      auth.signOut()
        .then(() => alert("Tizimdan chiqildi"));
    }

    // Foydalanuvchi holatini tekshirish
    auth.onAuthStateChanged(user => {
      const info = document.getElementById('user-info');
      if (user) {
        info.textContent = `Tizimga kirgan foydalanuvchi: ${user.email}`;
      } else {
        info.textContent = "Foydalanuvchi tizimga kirmagan";
      }
    });
  </script>

// Firebase'ni ishga tushirish
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google bilan kirish
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("Xush kelibsiz: " + result.user.displayName);
    })
    .catch((error) => {
      alert("Xatolik: " + error.message);
    });
}
