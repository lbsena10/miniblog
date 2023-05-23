import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWk4rkCfZgao8vQ5qByuwHMfKhCeCiT7U",
  authDomain: "miniblog-7ec6f.firebaseapp.com",
  projectId: "miniblog-7ec6f",
  storageBucket: "miniblog-7ec6f.appspot.com",
  messagingSenderId: "758199419232",
  appId: "1:758199419232:web:7e84d2d9612c4658a01e05",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
