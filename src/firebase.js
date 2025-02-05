
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAv3wijd7Q1ZsWmwHgSRxxMzqeWezbIroo",
  authDomain: "emailsaver-626b6.firebaseapp.com",
  projectId: "emailsaver-626b6",
  storageBucket: "emailsaver-626b6.firebasestorage.app",
  messagingSenderId: "746568510495",
  appId: "1:746568510495:web:cb5d092427834d347bf92a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireStore = getFirestore(app);
