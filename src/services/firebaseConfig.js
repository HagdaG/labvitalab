import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJO4rABA4HvXbukk7_s4cFcYaa0LY_rPM",
  authDomain: "vitalab-d291b.firebaseapp.com",
  projectId: "vitalab-d291b",
  storageBucket: "vitalab-d291b.firebasestorage.app",
  messagingSenderId: "596147641014",
  appId: "1:596147641014:web:779819c75cb7690503e417",
  measurementId: "G-LN575JBJK6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);