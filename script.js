import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAeA_4EtvPNBMh0jbA-zWNoeEsX6ZhZSzs",
  authDomain: "fruits-d0078.firebaseapp.com",
  projectId: "fruits-d0078",
  storageBucket: "fruits-d0078.appspot.com",
  messagingSenderId: "69757055872",
  appId: "1:69757055872:web:b9ef7274fb60e37f894765",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
