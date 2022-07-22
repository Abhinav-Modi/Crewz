import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC9u9Nng6pbAwisrLgJjY183yajKG4-_CI",
	authDomain: "crewz-27aa1.firebaseapp.com",
	projectId: "crewz-27aa1",
	storageBucket: "crewz-27aa1.appspot.com",
	messagingSenderId: "842256170698",
	appId: "1:842256170698:web:ae63557ab4304d5872be33",
};

// initializing firebase
firebase.initializeApp(firebaseConfig);
// initializing the services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
// timestamp
const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, timestamp };
