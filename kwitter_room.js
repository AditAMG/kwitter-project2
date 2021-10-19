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

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}