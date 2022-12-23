import React, {useState, useEffect} from 'react'
import { Column, ColumnName, TableBody, ToDoContainer, ButtonContainer } from './todolist.js'
import TaskRow from './TaskRow.jsx'

const ToDoList = () => {

    
    const [backEndData, setBackEndData] = useState([])
    const [tipoTareas, setTipoTareas] = useState("todas")
    const [taskData, setTaskData] = useState('')
        
    useEffect((prevState) => {


        let url = "http://localhost:5000/api"

        if (tipoTareas === "finalizadas"){
            url += "/completed"
        }else if (tipoTareas === "pendientes"){
            url += "/pendant"
        
        }

        const settings = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }    

        fetch(url, settings, true)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBackEndData(data)            
            
        })
    }, [tipoTareas])
    
    const handleClick = (valor) =>{
        setTipoTareas(valor)
    }

    const taskProps = {
        tipoTareas,
    }

    const addTask = (e)=>{
        e.preventDefault()
        let url = "http://localhost:5000/api"
        let body = {
            name: taskData,
            state: 'pendiente'
        }

        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }    

        fetch(url, settings, true)
        .then(res => {
            return res.json()
        })
        .then(data => {
          console.log(data)          
        })
    }
    

    return (
        <>
        <ButtonContainer>
            <div className="half-div">
                <button className="button-62"  onClick={()=> {handleClick("finalizadas")}}>Completadas</button>
                <button className="button-62"  onClick={()=> {handleClick("pendientes")}}>En progreso</button>
                <button className="button-62" onClick={()=> {handleClick("todas")}}>Todas</button>
            </div>
        </ButtonContainer>
        <ToDoContainer>
            <TableBody>
                <Column>
                    <ColumnName width="40%" text="left">Tarea</ColumnName>
                    <ColumnName width="20%" text="right">Estado</ColumnName>
                    <ColumnName width="20%" text="right">Numero</ColumnName>
                    <ColumnName width="20%" text="right">Acciones</ColumnName>
                </Column>

                {
                    backEndData.map((task, index) => {
                        return (<TaskRow tarea={task} key={task.id} numero={index + 1} manejoEstado={taskProps}></TaskRow>)
                    })
                }
            </TableBody>
        </ToDoContainer>
        <ButtonContainer>
            <form onSubmit={addTask}>
                <input type="text" placeholder='Tarea' onChange={(e)=>{setTaskData(e.target.value)}}/>
                <button type='submit' className='button-62'>Agregar Tarea</button>
            </form>
        </ButtonContainer>
        </>
    )
}

export default ToDoList