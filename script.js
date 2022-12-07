import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

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

// Read data

const ref = collection(db, "fruits");

getDocs(ref)
  .then((snapshot) => {
    const fruits = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(fruits);
  })
  .catch((error) => {
    console.log(error);
  });

// Write data

const addForm = document.getElementById("add");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fruit = {
    name: addForm.name.value,
    color: addForm.color.value,
    emoji: addForm.emoji.value,
  };

  addDoc(ref, fruit).then(() => {
    alert("Doc added");
  });
});

// Delete data

const deleteForm = document.getElementById("delete");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "fruits", deleteForm.id.value);

  deleteDoc(docRef).then(() => {
    alert("doc deleted");
  });
});
