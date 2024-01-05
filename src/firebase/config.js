import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCqCtIGH1z3UWuQ_EMmm8pHD_klf5kcr4Q",
    authDomain: "financetracker-74e33.firebaseapp.com",
    projectId: "financetracker-74e33",
    storageBucket: "financetracker-74e33.appspot.com",
    messagingSenderId: "841671627449",
    appId: "1:841671627449:web:62e1b1f4416a54189f4168"
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFireStore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export{projectFireStore,projectAuth,timestamp}