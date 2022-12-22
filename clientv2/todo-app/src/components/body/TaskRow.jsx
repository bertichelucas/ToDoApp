import React, {  useState } from 'react'
import { Column, Cell } from './todolist.js'

const TaskRow = (props) => {




    /*useEffect((prevProps, prevState)=>{

        if(prevState.tarea.STATE === tarea.STATE) return 
        
        const bodyContent = {
            id: tarea.ID,
            name: tarea.NAME,
            state: tarea.STATE
        }

        const settings = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyContent)
        }    

        fetch("http://localhost:5000/api", settings, true)
        .then(res => {
            return res.json()
        })
        .then(data => {
            
        })
    },[tarea])*/
/*
    const handleDoneButton = () =>{
        const newtarea = {
            ...props.tarea,
            STATE: `${props.tarea.STATE === "finalizada"?"pendiente":"finalizada"}`
        }
        props.manejoEstado.handleTables(props.manejoEstado.tipoTareas)
    }
*/
    return (
        <Column>
            <Cell  width="40%" text="left">{props.tarea.NAME}</Cell>
            <Cell  width="20%" text="right">{props.tarea.STATE}</Cell>
            <Cell  width="20%" text="right">{props.numero}</Cell>
            <Cell  width="20%" text="right">
                <button className="button-62" >{props.tarea.STATE === "finalizada"?"Restore":"Done"}</button>
                <button className="button-62" >Trash</button>
            </Cell>
        </Column>
    )
}


export default TaskRow