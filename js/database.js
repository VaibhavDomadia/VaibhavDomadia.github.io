(function initdatabase() {
      // Initialize Firebase
      var config = {
      apiKey: "AIzaSyAs7J4hlBXsgyfDB--BqVYzHj9fjQYWls8",
      authDomain: "to-do-dba8b.firebaseapp.com",
      databaseURL: "https://to-do-dba8b.firebaseio.com",
      projectId: "to-do-dba8b",
      storageBucket: "to-do-dba8b.appspot.com",
      messagingSenderId: "364465222352"
      };
      firebase.initializeApp(config);
}());

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
      console.log("Got a permission");
      return messaging.getToken();
})
.then(function(token) {
      console.log(token);
})
.catch(function(err) {
      console.log("Sorry");
})
