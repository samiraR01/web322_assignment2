const userLogin = (req, res) => {
  if (req.body.userName === "" || req.body.password === "") {
    const error = "Email/Password fields must not be empty!";
    res.render("login", { error });
  } else if (
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(req.body.userName)
  ) {
    res.render("login", {
      error: "Username must not contain special characters!",
    });
  } else {
    res.redirect("/dashboard");
  }
};

const registerUser = (req, res) => {
  const error = "Fields must not be empty";
  if (req.body.email === "") {
    res.render("registration", { error });
  } else if (req.body.password === "") {
    res.render("registration", { error });
  } else if (req.body.confirmPassword === "") {
    res.render("registration", { error });
  } else if (req.body.firstName === "") {
    res.render("registration", { error });
  } else if (req.body.lastName === "") {
    res.render("registration", { error });
  } else if (req.body.phone === "") {
    res.render("registration", { error });
  } else if (req.body.companyAddress === "") {
    res.render("registration", { error });
  } else if (req.body.address === "") {
    res.render("registration", { error });
  } else if (req.body.postalCode === "") {
    res.render("registration", { error });
  } else if (req.body.city === "") {
    res.render("registration", { error });
  } else if (req.body.country === "") {
    res.render("registration", { error });
  } else if (isNaN(req.body.phone)) {
    res.render("registration", { error: "Phone Number must contain digits" });
  } else if (!/^[a-zA-Z0-9]{6,12}$/.test(req.body.password)) {
    res.render("registration", {
      error: "Password must contain 6-12 alphanumeric characters",
    });
  } else {
    res.redirect("/dashboard");
  }
};

const getUserDashboard = (req, res) => {
  res.render("dashboard");
};

module.exports = {
  userLogin,
  registerUser,
  getUserDashboard,
};
