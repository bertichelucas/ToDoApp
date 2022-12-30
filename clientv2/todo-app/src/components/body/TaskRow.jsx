import React from 'react'
import { useContextProvider } from '../util/global.context.jsx'

const TaskRow = (props) => {

    const contextState = useContextProvider().contextState
    const setContextState = useContextProvider().setContextState

    const handleUpdate = () => {
        var updateTask  = contextState.tasks.find(task => task.ID === props.tarea.ID)
        var tasks = contextState.tasks.filter(task => task.ID !== props.tarea.ID)

        if (updateTask.STATE === 'finalizada') updateTask.STATE = 'pendiente'
        else if (updateTask.STATE === 'pendiente') updateTask.STATE = 'finalizada'
        tasks.push(updateTask)
        setContextState({tasks: tasks})

        let url = "http://localhost:5000/api"
        let body = {
            id: updateTask.ID,
            state: updateTask.STATE
        }

        const settings = {
            method: 'PUT',
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
    }

    const handleDelete = () => {
        var taskToDelete = contextState.tasks.find(task => task.ID === props.tarea.ID)
        setContextState({tasks: contextState.tasks.filter(task => task.ID !== props.tarea.ID)})

        let url = "http://localhost:5000/api"
        let body = {
            id: taskToDelete.ID,
        }

        const settings = {
            method: 'DELETE',
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

    }

    return (
        <div className='itemWrapper'>

            <tr className='checkItem'>
                <p  className='itemName'>{props.tarea.NAME}</p>
                <p id='state' >{props.tarea.STATE}</p>
                <p id='number' >{props.numero}</p>
                <div className='actions' id= 'actions'>
                    <button className="button-62" onClick={handleUpdate} >{props.tarea.STATE === "finalizada"?"Restore":"Done"}</button>
                    <button className="button-62" onClick={handleDelete}>Trash</button>
                </div>
            </tr>
        </div>
    )
}


export default TaskRow