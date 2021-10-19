function addUser(){
    user=document.getElementById("input").value;
    localStorage.setItem("User",user);
    window.location="room.html";
    document.getElementById("input").value="";
}