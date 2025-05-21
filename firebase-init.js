
// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8q3FRIntWOPCgG7vqUVHn35FVGoGKPUM",
  authDomain: "web-anak-hebat.firebaseapp.com",
  projectId: "web-anak-hebat",
  storageBucket: "web-anak-hebat.appspot.com",
  messagingSenderId: "285534946031",
  appId: "1:285534946031:web:d8e3cdb733a8123196111a",
  measurementId: "G-SQFVW2033W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      document.getElementById("user-info").innerHTML = 'Hai, ' + user.displayName;
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "inline-block";
    });
};

window.logoutGoogle = () => {
  signOut(auth).then(() => {
    document.getElementById("user-info").innerHTML = '';
    document.getElementById("login-btn").style.display = "inline-block";
    document.getElementById("logout-btn").style.display = "none";
  });
};

document.getElementById("login-btn").onclick = loginGoogle;
document.getElementById("logout-btn").onclick = logoutGoogle;
