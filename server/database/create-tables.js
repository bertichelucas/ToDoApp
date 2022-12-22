var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdasd11",
  database: "tododb"
});

module.exports = {
    createTables: function(){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "CREATE TABLE IF NOT EXISTS TASKS (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(255), STATE VARCHAR(255), PRIMARY KEY(ID))";
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("Table created");
            });
          });
    }
}
