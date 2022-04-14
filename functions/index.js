const functions = require("firebase-functions");
const express = require("express");

const app = express();
app.get("/test", (request, response) => {
  response.send("Hello Dante");
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
