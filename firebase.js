// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD-PzpFH77x-f2Q75mumfks5rEbu1KHCHw",
    authDomain: "ironapp-57d41.firebaseapp.com",
    projectId: "ironapp-57d41"
});

const db = getFirestore();

function persistUser() {
db.collection('usuarios').add(localStorage.getItem('user'));
}