import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCkxd_1szew9atFTExjVu68gPImCfwBoI8",
  authDomain: "tubes-869b8.firebaseapp.com",
  projectId: "tubes-869b8",
  storageBucket: "tubes-869b8.appspot.com",
  messagingSenderId: "610049558974",
  appId: "1:610049558974:web:cd3b671e7c94c6f087d1ef"
});

const FIREBASE = firebase;

export default FIREBASE;