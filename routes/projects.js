var express = require("express");
var router = express.Router();
const { Project, projects } = require("../models/projects");

const findProject = function(name) {
  console.log(name);
  console.log(projects.name);
  return projects.find(function(projects) {
    return name == projects.name;
  });
};

/* GET home page. */
router.get("/:name", function(req, res, next) {
  const project = findProject(req.params.name);
  res.render("projects", { projects: project });
});

module.exports = router;
