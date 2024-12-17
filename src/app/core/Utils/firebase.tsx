// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFBo17wgI7bbwQ1N6_k8X_6FFc23Ty5v0",
  authDomain: "lacostureriawebpage.firebaseapp.com",
  projectId: "lacostureriawebpage",
  storageBucket: "lacostureriawebpage.firebasestorage.app",
  messagingSenderId: "230980560313",
  appId: "1:230980560313:web:22427ec9015df6389d8268",
  measurementId: "G-NE5Y0K76P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);
export default db;