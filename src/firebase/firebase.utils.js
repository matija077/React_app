import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzBtWPDldekIDJ6etFDxh9Iyx1HolLq18",
    authDomain: "react-db-bf117.firebaseapp.com",
    databaseURL: "https://react-db-bf117.firebaseio.com",
    projectId: "react-db-bf117",
    storageBucket: "react-db-bf117.appspot.com",
    messagingSenderId: "585116326954",
    appId: "1:585116326954:web:a1f8e520c4116061ad3753",
    measurementId: "G-440ZX93L7Z"
};


firebase.initializeApp(config);

// used anwyhere where we need authentication
export const auth = firebase.auth();

// sued anywhere we need firestore
export const firestore = firebase.firestore();

// we can use any provider we want I.E twitter...
const provider = new firebase.auth.GoogleAuthProvider();
//
provider.setCustomParameters({ prompt: 'select_account'});

function signInWithGoogle2() {
     auth.signInWithPopup(provider).then(function(result) {
         console.log(result);
     }).catch(function(error) {
         console.log(error);
     });
}

export const signInWithGoogle = signInWithGoogle2.bind(this);



export default firebase;