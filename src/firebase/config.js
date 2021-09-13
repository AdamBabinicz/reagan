import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsl4Lwqq0jEjAmzN1yUDQ8Z83Ex9tvMv8",
  authDomain: "portfolio-website-78aec.firebaseapp.com",
  projectId: "portfolio-website-78aec",
  storageBucket: "portfolio-website-78aec.appspot.com",
  messagingSenderId: "816811738158",
  appId: "1:816811738158:web:ff2d6847bee40b2147cbbf",
  measurementId: "G-VCNSPGPNCW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
