var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdasd11",
  database: "tododb"
});

module.exports = {
    createTask: function(task){
        
            var sql = `INSERT INTO TASKS(NAME, STATE) VALUES ("${task.name}", "${task.state}")`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
    },

    getAllTasks: function(callback){
        var sql = `SELECT * FROM TASKS`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("got all tasks!")
            return callback(result)
        });
    },

    getAllCompletedTasks: function(callback){
        var sql = `SELECT * FROM TASKS WHERE STATE='finalizada'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("got all completed tasks!")
            return callback(result)
        });
    },

    getAllPendantTasks: function(callback){
        var sql = `SELECT * FROM TASKS WHERE STATE='pendiente'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("got all pendant tasks!")
            return callback(result)
        });
    },

    updateTask: function(task){
        var sql = `UPDATE TASKS SET STATE="${task.state}" WHERE ID="${task.id}"`
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record updated");
        });
    },

    deleteTask: function(task){
        var sql = `DELETE FROM TASKS WHERE ID =${task.id}`
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(`Deleted the record with id ${task.id}`);
        });
    }
}



