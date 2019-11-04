var orm = require("../config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured", "Triple Hoagie Mega Burger", false);

orm.updateOne("burgers", "ULTRA UPDATE BURGER 2.0", "id", "1");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };

module.exports(burger);