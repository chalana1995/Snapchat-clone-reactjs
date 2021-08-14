import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDx4val-PP1oTAy9AHWLfs7NCSslmk_uqw",
    authDomain: "snapchat-clone-62f05.firebaseapp.com",
    projectId: "snapchat-clone-62f05",
    storageBucket: "snapchat-clone-62f05.appspot.com",
    messagingSenderId: "791028508875",
    appId: "1:791028508875:web:2a50dc970ec31045fb134e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};