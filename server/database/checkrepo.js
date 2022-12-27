var mysql = require('mysql');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdasd11",
  database: "tododb"
});

module.exports = {
    createCheckItem: function(check){
        var sql = `INSERT INTO CHECKS(NAME, TIMES_COMPLETED, TIMES_NOTCOMPLETED, STREAK ) VALUES ("${check.name}", 0,0,0)`;
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
    },

    updateAllCheckItems: function(body){

        var checks = body.checks

        checks.forEach(check => {
            
            var sql = `UPDATE CHECKS SET TIMES_COMPLETED = ${check.TIMES_COMPLETED},
            TIMES_NOTCOMPLETED = ${check.COMPLETED? check.TIMES_NOTCOMPLETED: check.TIMES_NOTCOMPLETED + 1},
            STREAK = ${check.STREAK} WHERE ID = "${check.ID}"`

            con.query(sql, function(err, result){
                if (err) throw err
                console.log(`Se updatea el check con id ${check.ID}`)
            })

        });

        

        console.log(checks)
    }
}