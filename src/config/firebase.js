// ⚠️ IMPORTANTE: Reemplazar estas credenciales con las de tu proyecto Firebase
// Para obtenerlas: https://console.firebase.google.com/
// 1. Ve a Configuración del Proyecto
// 2. Copia las credenciales de la sección "Firebase SDK snippet"

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2-WW59p_K7srElsrW_EAqRWLJ-NfAtMw",
  authDomain: "cursoingreso-7344d.firebaseapp.com",
  projectId: "cursoingreso-7344d",
  storageBucket: "cursoingreso-7344d.firebasestorage.app",
  messagingSenderId: "634585469878",
  appId: "1:634585469878:web:a77dfcb37025f0deac6717"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firebase Authentication
export const auth = getAuth(app)

// Inicializar Cloud Firestore
export const db = getFirestore(app)

export default app
