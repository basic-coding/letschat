function logout(){
    window.location="index.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyCjyuxf4HSJXX6ZFbLdfrvMZF-JjEXyThM",
    authDomain: "pagerweb.firebaseapp.com",
    databaseURL: "https://pagerweb-default-rtdb.firebaseio.com",
    projectId: "pagerweb",
    storageBucket: "pagerweb.appspot.com",
    messagingSenderId: "447979792770",
    appId: "1:447979792770:web:625dee21273d763732879b",
    measurementId: "G-44EREZQQ00"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addRoom(){
    user=document.getElementById("input1").value;
    firebase.database().ref("/").child(user).update({
        purpose:"adding user"
    });
}