const path = require("path");

const express = require("express");
const app = express();

app.use(express.static("web311_assignment2"));
/*app.use(express.static("views/images"));*/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/web311_assignment2/home.html"));
});

app.get("/cwh", (req, res) => {
    res.sendFile(path.join(__dirname, "/web311_assignment2/cwh.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/web311_assignment2/login.html"));
});

app.get("/registration", (req, res) => {
    res.sendFile(path.join(__dirname, "/web311_assignment2/registration.html"));
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something broke!")
});

// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8080;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
  
// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);