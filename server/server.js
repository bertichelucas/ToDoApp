var database = require("./database/create")
var tables = require("./database/create-tables")
var todoQueries = require("./database/taskrepo")
var checkQueries = require("./database/checkrepo")
var fs = require('fs')

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

app.put("/api/check", (req, res) => {
        const fecha = new Date()
        
        var name = "./database/data.json"
        var m = JSON.parse(fs.readFileSync(name).toString());
        if (m.last_update_time === null || fecha.getDate() !== m.last_update_time){
            console.log("Se hace el update")
            checkQueries.updateAllCheckItems(req.body)
            res.status(200)
            m.last_update_time = fecha.getDate()
            fs.writeFileSync(name, JSON.stringify(m))
        } else{
            console.log("No se puede hacer el update")
            res.status(405)
        }
    
    res.json()
    
})

app.listen(5000, () =>{ console.log("Server started on port 5000")})