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

      var messaging = firebase.messaging();
      messaging.usePublicVapidKey("BBUYBs9u2AawQCS-gmhCAmk4sQSZwM4iuzvAo9dYSZo4jXZHagEtV9jEUTeEBMuFzhxhMiuEu_SF_9IoJskP_mc");
      messaging.requestPermission().then(function () {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...
      }).catch(function (err) {
            console.log('Unable to get permission to notify.', err);
      });
}());
