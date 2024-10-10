// Importar funciones de Firebase usando CommonJS
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Configuración de tu proyecto de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAz_cd15YJq1T4j0PlB2idfZD9O7Ot8STs",
    authDomain: "serviciosweb-94433.firebaseapp.com",
    projectId: "serviciosweb-94433",
    storageBucket: "serviciosweb-94433.appspot.com",
    messagingSenderId: "342128827490",
    appId: "1:342128827490:web:1bfcd1fed195f26c7cc53b",
    measurementId: "G-EFDMR1R32Q"
  };
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Cloud Firestore y obtener una referencia al servicio
const db = getFirestore(app);

// Exportar la instancia de la aplicación y la base de datos
module.exports = { app, db };