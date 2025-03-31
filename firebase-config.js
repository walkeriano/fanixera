import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrTjozEdzP6tpUtpy0Wx4PSMCIkJsExIE",
  authDomain: "fani-promcenter-a0bed.firebaseapp.com",
  projectId: "fani-promcenter-a0bed",
  storageBucket: "fani-promcenter-a0bed.appspot.com",
  messagingSenderId: "793267917660",
  appId: "1:793267917660:web:8ae89c496d708b0bcba799",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistencia de sesión configurada correctamente.");
  })
  .catch((error) => {
    console.error("Error al configurar la persistencia de la sesión:", error);
  });

export { auth, db, storage };
