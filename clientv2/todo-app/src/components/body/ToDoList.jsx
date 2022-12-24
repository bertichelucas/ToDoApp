import React, {useState} from 'react'
import { Column, ColumnName, TableBody, ToDoContainer, ButtonContainer } from './todolist.js'
import TaskRow from './TaskRow.jsx'
import { useContextProvider } from '../util/global.context.jsx'
import { useEffect } from 'react'

const ToDoList = () => {

    const contextState = useContextProvider().contextState
    
    const [tipoTareas, setTipoTareas] = useState("todas")
    const [taskData, setTaskData] = useState('')
    
    useEffect(()=>{
        
    },[tipoTareas])
    

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
                <button className="button-62"  onClick={()=> {handleClick("finalizada")}}>Completadas</button>
                <button className="button-62"  onClick={()=> {handleClick("pendiente")}}>En progreso</button>
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
                    tipoTareas === 'todas'? contextState.tasks.map((task, index) => {
                        return (<TaskRow tarea={task} key={task.id} numero={index + 1} manejoEstado={taskProps}></TaskRow>)}):
                    contextState.tasks.filter(task => task.STATE === tipoTareas).map((task, index) => {
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