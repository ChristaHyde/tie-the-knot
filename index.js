const express = require("express");
const path = require('path');

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./src/routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  console.log('PRODUCTION MODE!')
  app.use(express.static("client/build"));
}
// Add api routes
app.use(routes);

app.all("*", function (req, res, next) {
  if (/^\/api/.test(req.url)) return res.next();
  res.sendFile(path.resolve('client', 'build', 'index.html'))
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tietheknot");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
