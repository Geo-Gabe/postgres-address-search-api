const express = require("express");

// Init express app
const app = express();

//middleware
app.use(express.json()); // Enables JSON

//Allows CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Load routes
const addressRoute = require("./Routes/address");

// Initalize routes
app.use("/api/v1/address", addressRoute);

// Check environment variable for port
const port = process.env.PORT || 3001;

// Initialize server
app.listen(port, () => console.log(`Listening on port ${port}...`));
