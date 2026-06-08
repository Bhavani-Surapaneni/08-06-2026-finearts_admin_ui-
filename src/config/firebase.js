import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGYXCl_H9FoPhxbBKI5vFfNILTiIC8a2s",
  authDomain: "finearts2026bb.firebaseapp.com",
  projectId: "finearts2026bb",
  storageBucket: "finearts2026bb.firebasestorage.app",
  messagingSenderId: "134974288361",
  appId: "1:134974288361:web:0cbdb1a1baba3b8a7b9b78",
  measurementId: "G-EY9PYRZLYD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("✅ Firebase persistence enabled");
  })
  .catch((error) => {
    console.log("❌ Persistence error:", error);
  });