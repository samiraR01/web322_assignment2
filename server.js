const path = require("path");
const express = require("express");
const {
  userLogin,
  registerUser,
  getUserDashboard,
} = require("./controllers/userController");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "./web311_assignment2")));
app.use(express.urlencoded({ extended: true }));
/*app.use(express.static("views/images"));*/

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/dashboard", getUserDashboard);

app.get("/cwh", (req, res) => {
  res.render("cwh");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", userLogin);

app.get("/registration", (req, res) => {
  res.render("registration");
});

app.post("/registration", registerUser);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
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
