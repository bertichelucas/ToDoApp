var database = require("./database/create")
var tables = require("./database/create-tables")
var queries = require("./database/taskrepo")


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

app.get("/api", (req, res) =>{
    queries.getAllTasks((result) =>{    
        res.json(result)
    })
})

app.get("/api/completed", (req, res) =>{
    queries.getAllCompletedTasks((result) =>{    
        res.json(result)
    })
})

app.get("/api/pendant", (req, res) =>{
    queries.getAllPendantTasks((result) =>{    
        res.json(result)
    })
})


app.put("/api", (req, res) =>{
    queries.updateTask(req.body)
    res.json()
    res.status(200)
})


app.post("/api", (req, res) =>{
    
    queries.createTask(req.body)
    res.json(req.body)
    
})

app.listen(5000, () =>{ console.log("Server started on port 5000")})