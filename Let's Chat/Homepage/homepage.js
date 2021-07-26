//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBuPcSFo9p0BQMv9B0End2eRWCYZtLY9t4",
    authDomain: "let-s-chat-4cc3b.firebaseapp.com",
    databaseURL: "https://let-s-chat-4cc3b-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4cc3b",
    storageBucket: "let-s-chat-4cc3b.appspot.com",
    messagingSenderId: "384752716589",
    appId: "1:384752716589:web:947cb299f4e39d59ec61a4",
    measurementId: "G-LDYZR9NXNL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function load(){
    username = localStorage.getItem("Username");
    useremail = localStorage.getItem("Email");
    document.getElementById("UserName").innerHTML = username;
    document.getElementById("UserEmail").innerHTML = useremail;
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function createRoom(){
  roomName = document.getElementById("room_name").value;
  alert(roomName);
  localStorage.setItem("Room Name", roomName);
  window.location = "loader.html";
  firebase.database().ref("/").child(roomName).update({
    purpose:"adding room"
  });
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room Name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
