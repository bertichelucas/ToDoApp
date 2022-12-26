var database = require("./database/create")
var tables = require("./database/create-tables")
var todoQueries = require("./database/taskrepo")
var checkQueries = require("./database/checkrepo")


//npm run dev to run the server

database.createDatabase();
tables.createTables();

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(bodyParser.json())




app.use(cors(corsOptions)) // Use this after the variable declaration

/*TASK CONTROLLER */

app.get("/api", (req, res) =>{
    todoQueries.getAllTasks((result) =>{    
        res.json(result)
    })
})

app.get("/api/completed", (req, res) =>{
    todoQueries.getAllCompletedTasks((result) =>{    
        res.json(result)
    })
})

app.get("/api/pendant", (req, res) =>{
    todoQueries.getAllPendantTasks((result) =>{    
        res.json(result)
    })
})


app.put("/api", (req, res) =>{
    todoQueries.updateTask(req.body)
    res.json()
    res.status(200)
})


app.post("/api", (req, res) =>{
    
    todoQueries.createTask(req.body)
    res.json(req.body)
    
})

app.delete("/api", (req, res) =>{
    todoQueries.deleteTask(req.body)
    res.json()
    res.status(200)
})


/* CHECK CONTROLLER */

app.get("/api/check", (req, res)=>{
    checkQueries.getAllCheckItems((result) =>{
        res.json(result)
    })    
})

app.post("/api/check", (req, res)=>{
    checkQueries.createCheckItem(req.body)
    res.json()
    res.status(200)
})

app.listen(5000, () =>{ console.log("Server started on port 5000")})