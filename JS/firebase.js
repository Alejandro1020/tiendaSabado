// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKDGEbFwmJXNiNxfV5er3gYnh9uErCWPY",
  authDomain: "alejotiendacesde.firebaseapp.com",
  projectId: "alejotiendacesde",
  storageBucket: "alejotiendacesde.appspot.com",
  messagingSenderId: "683744484865",
  appId: "1:683744484865:web:5a754d5c75589ad3316a00",
  measurementId: "G-0DP8EHWGW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);