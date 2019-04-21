importScripts("https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.2/firebase-messaging.js");

const config = {
      apiKey: "AIzaSyAs7J4hlBXsgyfDB--BqVYzHj9fjQYWls8",
      authDomain: "to-do-dba8b.firebaseapp.com",
      databaseURL: "https://to-do-dba8b.firebaseio.com",
      projectId: "to-do-dba8b",
      storageBucket: "to-do-dba8b.appspot.com",
      messagingSenderId: "364465222352"
};
firebase.initializeApp(config);

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function (currentToken) {
      if (currentToken) {
            sendTokenToServer(currentToken);
            updateUIForPushEnabled(currentToken);
      } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            updateUIForPushPermissionRequired();
            setTokenSentToServer(false);
      }
}).catch(function (err) {
      console.log('An error occurred while retrieving token. ', err);
      showToken('Error retrieving Instance ID token. ', err);
      setTokenSentToServer(false);
});




// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function () {
      messaging.getToken().then(function (refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // ...
      }).catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err);
            showToken('Unable to retrieve refreshed token ', err);
      });
});
