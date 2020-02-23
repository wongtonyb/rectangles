//Entry point for server JS

// Entry point for server JavaScript
const path = require("path");

const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

// static file-serving middleware (files to serve up to browser such as bundle.js, css styles, images)
app.use(express.static(path.join(__dirname, "..", "public")));

//body parsing middleware (to use req.body)
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//access api routes
app.use("/api", require("./api"));

//access index.html (after api)
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Error 500 handler
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

//start server
const port = process.env.PORT || 4000; // this can be very useful if you deploy to Heroku!
app.listen(port, () => {
  console.log(`Your server, listening on port ${port}`);
});
