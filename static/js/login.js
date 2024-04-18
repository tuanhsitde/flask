// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFAnoaaKguywajs9ppKJNybNuQ65pnSnM",
    authDomain: "login-and-register-60523.firebaseapp.com",
    projectId: "login-and-register-60523",
    storageBucket: "login-and-register-60523.appspot.com",
    messagingSenderId: "959256397683",
    appId: "1:959256397683:web:52744b04ec81aa0b852706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const submit = document.getElementById("submitlogin");
submit.addEventListener("click", function(event){
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Đăng nhập thành công");
            document.location.href="../index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

})