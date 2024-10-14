import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhTxemBnUCl1gAMLYwxJK1a-8-vphNxRk",
  authDomain: "chatpdf-c76ca.firebaseapp.com",
  projectId: "chatpdf-c76ca",
  storageBucket: "chatpdf-c76ca.appspot.com",
  messagingSenderId: "760337335895",
  appId: "1:760337335895:web:956bbf4e107de545bbc512"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
