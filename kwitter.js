var firebaseConfig = {
    apiKey: "AIzaSyD4z_0Cyt-bSHrL2TTOAF6zfRS_Ygpf0n0",
    authDomain: "kwitter-c1860.firebaseapp.com",
    databaseURL: "https://kwitter-c1860-default-rtdb.firebaseio.com",
    projectId: "kwitter-c1860",
    storageBucket: "kwitter-c1860.appspot.com",
    messagingSenderId: "53166453553",
    appId: "1:53166453553:web:f057d73cd0d7b81dc43610",
    measurementId: "G-LVJGRLH4TY"
  };
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}