import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";


import {

        getFirestore, 
        collection, 
        getDocs, 
        doc, 
        setDoc, 
        addDoc
    } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyC5lRApop9cr4tI5fp2oiO_gk4e4J69ttg",
    authDomain: "attendclass-193b6.firebaseapp.com",
    projectId: "attendclass-193b6",
    storageBucket: "attendclass-193b6.firebasestorage.app",
    messagingSenderId: "485295158182",
    appId: "1:485295158182:web:3bec95d41bb885d310d567",
    measurementId: "G-F24S1H6RL9"
    };

        
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");
const signUpButton = document.getElementById("signUpSubmit");
const signInButton = document.getElementById("signInSubmit");
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signUpForm").addEventListener("submit", async function(event) {
        event.preventDefault();

    });
});
signUpButton.addEventListener("click",signUpSubmit);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signInForm").addEventListener("submit", async function(event) {    
        event.preventDefault();
    });
});
signInButton.addEventListener("click",signInUser);



async function addUser(){
    console.log("Adding user to Firestore");
    await addDoc(collection(db, "users"), {
        name: name.value,
        email: email.value,
        password: password.value,
        gender: gender.value,
        dob: dob.value,

    });
}

async function signInUser(){
    signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User signed in successfully:", user);
            sendEmailVerification(user)
                .then(() => {
                    console.log("Verification email sent to:", user.email);
                })
                .catch((error) => { 
                    console.error("Error sending verification email:", error);
                });

            onAuthStateChanged(auth,(user)=> {
                if (user) {
                    console.log("User is signed in:", user);
                    window.location.href = "../index.html"; 
                    // User is signed in, you can redirect or perform other actions
                } else {
                    console.log("No user is signed in.");
                    // No user is signed in, you can redirect to login or show a message
                    window.location.href = "../login/login.html";
                }
            });
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in:", error, errorMessage);
            alert("Error signing in: " + errorMessage);
        });
}

async function registerUser(){
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // User created successfully
            console.log("User created successfully:", userCredential.user);
            // addUser();
            

            window.location.href = "../index.html";
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user:", error, errorMessage);
            alert("Error creating user: " + errorMessage);
        })

}


async function signUpSubmit(){
    
    console.log("Adding test user");
    registerUser();
    console.log("User registered successfully");
    addUser();
    console.log("User added to Firestore");
}
