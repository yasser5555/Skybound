// ! Middleware to check if user is authenticated
/*
token is sent in the request header as "Authorization: Bearer <token>"
token composition is:  header.payload.signature 
 ? where payload is the user data that we want to store in the token
*/
const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  try {
    //  Get Token cookies
    const token = req.headers.authorization?.split(" ")[1];
    // check if token exists
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized No token provided" });
    }
    // if it exists, broke it Read user data from it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // store user data in req.user for usage in the route handler
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized Invalid token" });
  }
  next();
}
