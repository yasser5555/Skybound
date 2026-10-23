// Express Framework
const express = require("express");
// server configeration
const app = express();
// for RestAPI Communication
const cors = require("cors");
// cookie parser to parse cookies from headers
const cookieParser = require("cookie-parser");
// ! Import Routes

// ! Parse Request Body as JSON
app.use(express.json());
// ! Parsing Cookies into req.cookies 
app.use(cookieParser());
// ! Enable CORS for all routes
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
// ! use imported routes by using app.use() method
module.exports = app;