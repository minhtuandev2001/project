import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export function connectDatabase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCi03lnEWgFK61CV32HJaPsYC8uohWG2AA",
        authDomain: "batdongsanweb.firebaseapp.com",
        projectId: "batdongsanweb",
        storageBucket: "batdongsanweb.appspot.com",
        messagingSenderId: "853795324769",
        appId: "1:853795324769:web:6128febc029646f2763b20",
        measurementId: "G-4DH9E26NJV"
        // apiKey: "AIzaSyAezgatVQESrA5h7WSEch5RmSpttEvdZW8",
        // authDomain: "batdongsan2-6a0ea.firebaseapp.com",
        // databaseURL: "https://batdongsan2-6a0ea-default-rtdb.firebaseio.com",
        // projectId: "batdongsan2-6a0ea",
        // storageBucket: "batdongsan2-6a0ea.appspot.com",
        // messagingSenderId: "107829120498",
        // appId: "1:107829120498:web:a15527a154e9d57018ef6b",
        // measurementId: "G-81NSN6NSNF"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("ket noi thanh cong");
    }
}