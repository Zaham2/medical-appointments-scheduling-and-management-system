// This server is intended to be as minimal as possible... My main concern is the frontend part of the application
// With more time, the backend would be much more organized

require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require('cors')

const options = {
  key: fs.readFileSync(path.join(__dirname, "../localhost-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../localhost.pem")),
};

app.use(cors())

https.createServer(options, app).listen(3000, () => {
  console.log("HTTPS server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
