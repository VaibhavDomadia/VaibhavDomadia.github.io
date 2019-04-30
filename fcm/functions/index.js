// const functions = require('firebase-functions');

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



// exports.thisone = functions.pubsub.schedule('every 2 minutes').onRun((context) => {
//       console.log('Executed finally');
// })

exports.myNotification = functions.database.ref('users')
      .onCreate((snapshot, context) => {
            console.log("I am called here.");
            admin.messaging().send('Hello i am here');
      });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//       admin.messaging().send('hello World 1')
//             .then((response) => {
//                   // Response is a message ID string.
//                   console.log('Successfully sent message:', response);
//             })
//             .catch((error) => {
//                   console.log('Error sending message:', error);
//             });;
//       response.send("Hello from Firebase!");
// });

// export scheduledFunction = functions.pubsub.schedule(‘every 5 minutes’).onRun((context) => {
//       console.log(‘This will be run every 5 minutes!’);
// });


// // This registration token comes from the client FCM SDKs.
// var registrationToken = 'e1_5HefGsXI:APA91bF2r-Ww4KmZ04y0XI6rOon-rQ1IJho4P6tMpUtho4dCkPk_hdQO1NfiHSXp2VeC-0R08ZjoA66BLvwAy9_TtK1WGL7YBCsyn9rK86RZyBpL9I_FN_vuBS1PdlRVVcnY-p6Wkz04';

// var message = {
//       data: {
//             score: '850',
//             time: '2:45'
//       },
//       token: registrationToken
// };

// // Send a message to the device corresponding to the provided
// // registration token.
// admin.messaging().send(message)
//       .then((response) => {
//             // Response is a message ID string.
//             console.log('Successfully sent message:', response);
//       })
//       .catch((error) => {
//             console.log('Error sending message:', error);
//       });