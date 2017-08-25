
// Import the model (burger.js) to use its database functions.
var Burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    Burger.findAll({}).then(function(data) {
      // results are available to us inside the .then
      res.json(data);
    });
    // Burger.findAll(function(data) {
    //   res.json(data);
    // });
  });

  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(data) {
      // results are available to us inside the .then
      res.json(data);
    });
  });

  app.post("/new", function(req, res) {
    console.log(req.body);
    Burger.create({
      burger_name: req.body.name, 
      devoured: req.body.devoured,
      date: req.body.created_at
    }).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(data);
    });
  });

  app.post("/:id", function(req, res) {
    console.log(req.body);
    Burger.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(data) {
      console.log(data);
      res.json(data);
    });
  });

};

