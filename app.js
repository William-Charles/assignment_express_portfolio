var express = require("express");
var path = require("path");
var index = require("./routes/index");
var projects = require("./routes/projects");

var app = express();

// view engine setup
app.set("view engine", "hbs");

app.use("/", index);
app.use("/projects", projects);
app.use(express.static(path.join(__dirname, "public")));
app.use("projects/project", function(req, res) {
  //
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || "3000";

app.listen(port);

module.exports = app;
