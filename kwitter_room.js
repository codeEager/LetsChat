const firebaseConfig = {
      apiKey: "AIzaSyDxsTFcKH9dfpFwDPevui0HTAyPmo4KJSY",
      authDomain: "kwittersocialwebsite.firebaseapp.com",
      databaseURL: "https://kwittersocialwebsite-default-rtdb.firebaseio.com",
      projectId: "kwittersocialwebsite",
      storageBucket: "kwittersocialwebsite.appspot.com",
      messagingSenderId: "176201963955",
      appId: "1:176201963955:web:6e3df0064c653d528753c6"
    };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = `<div class='room_name' id=${Room_names} onclick='redirectToRoomName(this.id)'> #${Room_names}</div><hr>`;
      document.getElementById("output")
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update ({
          purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
  
      window.location = "index.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}