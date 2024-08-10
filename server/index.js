// This server is intended to be as minimal as possible... My main concern is the frontend part of the application
// With more time, the backend would be much more organized

require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require('cors')
const authMiddleware = require("./middleware/auth-middleware");
const userController = require("./controllers/UserController");
const userService = require("./services/user.service");

const options = {
  key: fs.readFileSync(path.join(__dirname, "../localhost-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../localhost.pem")),
};

app.use(cors())
// app.use(authMiddleware)

https.createServer(options, app).listen(3000, () => {
  console.log("HTTPS server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.post('/auth/login/user', userController.getUserByClientId)

// app.delete('/auth/logout/user', (req, res) => {
//   res.send('user data removed')
// })

// app.post("/auth/login", (req, res) => {
//   res.send("Login");
//   // here I need to create new user and associate the token with the user
// });

app.post("/auth/logout", (req, res) => {
  res.send("Logout");
});

app.post('auth/validate', async (req, res) => {
  const user = await userService.getUserByToken(req.body?.token) ?? null
  res.send(user)
})
