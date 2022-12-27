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
            var sqlTodo = "CREATE TABLE IF NOT EXISTS TASKS (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(255), STATE VARCHAR(255), PRIMARY KEY(ID))";
            con.query(sqlTodo, function (err, result) {
              if (err) throw err;
              console.log("Todo tasks Table working");
            });
            /*var dropTable = `DROP TABLE IF EXISTS CHECKS`
            con.query(dropTable, function(err, result){
              if (err) throw err
              console.log(`table dropped`)
            })*/
            var sqlCheck = `CREATE TABLE IF NOT EXISTS CHECKS (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(255), 
                            TIMES_COMPLETED INT, TIMES_NOTCOMPLETED INT, STREAK INT, PRIMARY KEY(ID))`
            con.query(sqlCheck, function (err, result) {
              if (err) throw err;
              console.log("Check List Table working ")
            })
          });
    }
}
