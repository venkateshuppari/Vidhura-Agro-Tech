import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "vidhura-agro-tech.firebaseapp.com",
  projectId: "vidhura-agro-tech",
  storageBucket: "vidhura-agro-tech.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abc123"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);