// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

// Your web app’s Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9q4bkf_yPHJjcxNx3-8Z93qbjmkTVX8",
  authDomain: "finedge-f7bfc.firebaseapp.com",
  databaseURL:
    "https://finedge-f7bfc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "finedge-f7bfc",
  storageBucket: "finedge-f7bfc.appspot.com",
  messagingSenderId: "60106819044",
  appId: "1:60106819044:web:3b7846b7956365771973f1",
  measurementId: "G-05RK14JHKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, onValue };
