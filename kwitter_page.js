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
room_name=localStorage.getItem("room_name");

function sendmsg(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            massage:msg,
            name:user_name,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-primary id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }

getData();

function updateLike(message_id){
      console.log("Click on the like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });

}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location.replace("index.html");
}