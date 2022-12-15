import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  updateDoc,
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
const auth = getAuth(app);

// Read data

const ref = collection(db, "fruits");

onSnapshot(ref, (snapshot) => {
  const fruits = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(fruits);
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

// Update data

const updateForm = document.getElementById("update");

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = updateForm.id.value;
  const fruit = {
    name: updateForm.name.value,
    color: updateForm.color.value,
    emoji: updateForm.emoji.value,
  };

  const docRef = doc(db, "fruits", id);

  updateDoc(docRef, fruit).then(() => {
    alert("doc updated");
  });
});

// Sign up
const signUpForm = document.getElementById("signup");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signUpForm.email.value;
  const password = signUpForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log("User signed up", user);
    })
    .catch((e) => {
      console.log("An error", e);
    });
});

// Sign out

const signOutBtn = document.getElementById("signout");

signOutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("User Signed out!");
    })
    .catch((e) => {
      console.log("An error", e);
    });
});

// Sign in

const signInForm = document.getElementById("signin");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signInForm.email.value;
  const password = signInForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log("user logged in", user);
    })
    .catch((e) => {
      console.log("an error", e);
    });
});
