


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAvcE9ifrlhWXKDk_-GangmwXMBX74-oy0",
  authDomain: "kwitter-c1233.firebaseapp.com",
  databaseURL: "https://kwitter-c1233-default-rtdb.firebaseio.com",
  projectId: "kwitter-c1233",
  storageBucket: "kwitter-c1233.appspot.com",
  messagingSenderId: "802999956993",
  appId: "1:802999956993:web:4f57e252ac6e384735f200"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" +user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name="+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"addingRoom"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem(user_name);
  localStorage.removeItem(room_name);
  window.location.replace("index.html");
}