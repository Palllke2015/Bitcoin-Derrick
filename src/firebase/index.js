import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0Vu5QD2xQJSrfhrTaqz_x5vWWwCdKgB0",
    authDomain: "bitcoin-derrick.firebaseapp.com",
    databaseURL: "https://bitcoin-derrick.firebaseio.com",
    projectId: "bitcoin-derrick",
    storageBucket: "",
    messagingSenderId: "864479666368",
    appId: "1:864479666368:web:a2c220a20abd5e5e"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const storage = firebase.storage();

export default firebase;