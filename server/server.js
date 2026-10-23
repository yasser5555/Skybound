const app = require("./src/app");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
// Set the port from environment variable or default to 5000
const port = process.env.PORT || 5000;
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
