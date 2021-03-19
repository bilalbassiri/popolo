import  firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: 'il-popolo',
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURMENT_ID
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db
