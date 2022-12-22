var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asdasd11"
});

module.exports = {
    createDatabase: function(){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query("CREATE DATABASE IF NOT EXISTS tododb", function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });
        });
    }
}
