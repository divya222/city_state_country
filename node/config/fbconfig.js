var firebase = require('firebase');
var firebaseConfig = {
  apiKey: "AIzaSyCRfH4pppDeHApZ0VLBPbB2SS7fzS3xtjo",
  authDomain: "project2-14d2e.firebaseapp.com",
  databaseURL: "https://project2-14d2e.firebaseio.com",
  projectId: "project2-14d2e",
  storageBucket: "project2-14d2e.appspot.com",
  messagingSenderId: "348598155091",
  appId: "1:348598155091:web:038a96967e36813eecd3a6",
  measurementId: "G-XBCPD8ERPF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var db = firebase.database();
  module.exports = db;