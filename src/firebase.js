
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
apiKey: "AIzaSyDnGrfg_Zaa_bjAeZVp8NHRs_KhXORFWuw",
authDomain: "ms-teams-clone-dc2a6.firebaseapp.com",
projectId: "ms-teams-clone-dc2a6",
storageBucket: "ms-teams-clone-dc2a6.appspot.com",
messagingSenderId: "203965911682",
appId: "1:203965911682:web:e3facc78a0a3a605345a9b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
