const express = require("express");
const { format } = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method = "POST"><label for="nameInput">Your name</label><input type="text" name="nameInput"><button>Submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.nameInput;
  console.log(userName);
  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);
