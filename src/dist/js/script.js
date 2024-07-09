 // Import the functions you need from the SDKs you need
 const firebaseConfig = {
    apiKey: "AIzaSyACY3Ne39hjJ8rmNOHdiLXx6WJSCQhXYNc",
    authDomain: "zakatku-6612.firebaseapp.com",
    databaseURL: "https://zakatku-6612-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zakatku-6612",
    storageBucket: "zakatku-6612.appspot.com",
    messagingSenderId: "206373246079",
    appId: "1:206373246079:web:c2ecbabfcdc22eac1b9b4a",
    measurementId: "G-QGSLLENY0E"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  