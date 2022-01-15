import firebase  from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBhV7vKTem6OShhnX1YZXOTBIeKBtP2jfI",
  authDomain: "gunie-wish.firebaseapp.com",
  databaseURL: "https://gunie-wish-default-rtdb.firebaseio.com",
  projectId: "gunie-wish",
  storageBucket: "gunie-wish.appspot.com",
  messagingSenderId: "504782877559",
  appId: "1:504782877559:web:d6177fbe036650c6a32772"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;