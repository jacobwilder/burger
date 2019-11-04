var connection = require("./connection");

var orm = {
    
    
    selectAll: function (tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    
    
    insertOne: function (tableInput, colOne, colTwo, colOneVal, colTwoVal) {
      var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
      console.log(queryString);
      connection.query(queryString, [tableInput, colOne, colTwo, colOneVal, colTwoVal], function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    
    
    updateOne: function (tableInput, inputData, colId, idVal) {
      var queryString =
        "UPDATE ?? SET ? WHERE ?? = ?";
  
      connection.query(
        queryString,
        [tableInput, inputData, colId, idVal],
        function (err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;