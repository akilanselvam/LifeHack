const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");

app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));
const lifeHackRouter = require("./Route/lifehackRoute");
app.use((req, res, next) => {
  console.log("Hello from the Middleware😎");
  next();
});

app.use((req, res, next) => {
  req.requesttime = new Date().toISOString();
  next();
});

app.use(express.json());

app.use("/api/v1/lifehacks", lifeHackRouter);
module.exports = app;
