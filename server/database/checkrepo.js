var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdasd11",
  database: "tododb"
});

module.exports = {
    createCheckItem: function(check){
        var sql = `INSERT INTO CHECKS(NAME, REPEATABLE, TIMES_COMPLETED ) VALUES ("${check.name}", ${check.repeatable}, 0)`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted into Checks");
            });
    },

    getAllCheckItems: function (callback){
        var sql = `SELECT * FROM CHECKS`
        con.query(sql, function (err, result){
            if (err) throw err;
            console.log("Get al check items")
            return callback(result)
        })
    }
}