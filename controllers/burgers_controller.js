var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      console.log(data);
      res.render("index", {burger: data});
    });
  });
  
  router.post("/api/burgers/:id", function(req, res) {
    burger.selectOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      console.log(req.body);
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
      console.log(req.body);
      console.log(result);
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  