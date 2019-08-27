import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


var config = {
    apiKey: "AIzaSyA-q6chqsTRjopNney5WO5kZmTSMUzYxX0",
    authDomain: "react-plan-app.firebaseapp.com",
    databaseURL: "https://react-plan-app.firebaseio.com",
    projectId: "react-plan-app",
    storageBucket: "react-plan-app.appspot.com",
    messagingSenderId: "820082908983"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;