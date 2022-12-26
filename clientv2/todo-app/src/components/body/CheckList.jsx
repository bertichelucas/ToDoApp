import React from "react"
import './checklist.css'
import { useContextProvider } from "../util/global.context"
import { useState } from "react"
import axios from "axios"


const CheckList = () =>{

    const contextCheckState = useContextProvider().contextCheckState
    const setContextCheckState = useContextProvider().setContextCheckState

    const [checkItem, setCheckItem] = useState({
        name: '',
        repeatable: false,
        times_completed: 0
    })

    const addCheck = (e)=>{
        e.preventDefault()

        axios.post(`http://localhost:5000/api/check`, checkItem)

        var list = contextCheckState.checks
        list.push(checkItem)
        console.log(list)
        setContextCheckState({checks: list})

    }

    return (
        <div className="checkBody">
            <div className="checkInfo">
                <h1>CheckList</h1>
                <h2>Points</h2>
            </div>
         {contextCheckState.checks.map(item => <div className="itemWrapper"><div className="checkItem">{item.NAME}</div></div>)}

         <form className="formTarea" onSubmit={addCheck}>
            <label>Agregar Tarea</label>
                <input type="text" placeholder='Nombre Tarea' onChange={(e)=>{setCheckItem({...checkItem, name:e.target.value})}}/>
                <input type="checkbox"  placeholder="Repetible" onChange={(e)=> {setCheckItem({...checkItem, repeatable: e.target.checked })}}></input>
                <button type='submit' className='button-62'>Agregar Check Item</button>
            </form>
        </div>
    )
}

export default CheckList