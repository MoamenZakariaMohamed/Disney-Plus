import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDySiz0NU8ysjmYrzo0i1TORnchgC7XCsM",
    authDomain: "disney-edff2.firebaseapp.com",
    projectId: "disney-edff2",
    storageBucket: "disney-edff2.appspot.com",
    messagingSenderId: "245322318809",
    appId: "1:245322318809:web:eaec8451f295a2ef12cfc8",
    measurementId: "G-S4KPHM6NWL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;