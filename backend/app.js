const express = require("express");
const bodyParser = require("body-parser");
mysql = require("mysql");
const db = require("./config/database");
const postRoutes = require("./routes/Posts")
const userRoutes = require("./routes/Users")
const app = express();
const path = require("path");
const { static } = require("express");


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));





app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/posts", postRoutes);
app.use("/api/auth", userRoutes);


module.exports = app;
