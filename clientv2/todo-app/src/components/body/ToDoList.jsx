import React, {useState} from 'react'
import TaskRow from './TaskRow.jsx'
import { useContextProvider } from '../util/global.context.jsx'
import { useEffect } from 'react'
import './checklist.css'

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
        <div className='checkBody'>
            <div className='checkInfo'>
                <h1>ToDo List</h1>
                <div className="half-div">
                    <button onClick={()=> {handleClick("finalizada")}}>Completadas</button>
                    <button onClick={()=> {handleClick("pendiente")}}>En progreso</button>
                    <button onClick={()=> {handleClick("todas")}}>Todas</button>
                </div>
            </div>
        
            
            <div className='itemWrapper'>
                <div className='checkItem'>
                    <p id='tarea'>Tarea</p>
                    <p id='state'>Estado</p>
                    <p id='number'>Numero</p>
                    <p id='actions'>Acciones</p>
                </div>
            </div>

                {
                    tipoTareas === 'todas'? contextState.tasks.map((task, index) => {
                        return (<TaskRow tarea={task} key={task.id} numero={index + 1} manejoEstado={taskProps}></TaskRow>)}):
                    contextState.tasks.filter(task => task.STATE === tipoTareas).map((task, index) => {
                        return (<TaskRow tarea={task} key={task.id} numero={index + 1} manejoEstado={taskProps}></TaskRow>)
                    })
                }
            
            <div className='detailWrapper'>
                <details>
                    <summary className='summary'>Agregar Tarea</summary>
                    <form  className='formTarea' onSubmit={addTask}>
                        <input type="text" placeholder='Tarea' onChange={(e)=>{setTaskData(e.target.value)}}/>
                        <button type='submit'>Agregar Tarea</button>
                    </form>
                </details>
            </div>
        </div>
    )
}

export default ToDoList