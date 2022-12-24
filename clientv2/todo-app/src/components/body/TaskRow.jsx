import React from 'react'
import { Column, Cell } from './todolist.js'

const TaskRow = (props) => {
    
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