import React from "react"
import './checklist.css'
import { useContextProvider } from "../util/global.context"
import { useState } from "react"
import axios from "axios"
import CheckRow from "./CheckRow"
import CheckSubmit from "./CheckSubmit"


const CheckList = () =>{

    const contextCheckState = useContextProvider().contextCheckState
    const setContextCheckState = useContextProvider().setContextCheckState

    const [checkItem, setCheckItem] = useState({
        name: '',
    })


    const addCheck = (e)=>{
        e.preventDefault()

        axios.post(`http://localhost:5000/api/check`, checkItem)

        var list = contextCheckState.checks
        list.push(checkItem)
        setContextCheckState({checks: list})

    }

    const calcPoints = () =>{
        var points = 0;
        contextCheckState.checks.forEach(check => {
            points += check.TIMES_COMPLETED
            points -= check.TIMES_NOTCOMPLETED * 2
        });
        return points
    }

    return (
        <div className="checkBody">
            <div className="checkInfo">
                <h1>CheckList</h1>
                <h2>Points:{calcPoints()}</h2>
            </div>
            {contextCheckState.checks.map(item => <CheckRow key={item.ID} data={item}></CheckRow>)}
        
            <CheckSubmit></CheckSubmit>

            <div className="detailWrapper">
                <details>
                    <summary className="summary">Agregar Daily</summary>
                    <form className="formTarea" onSubmit={addCheck}>
                        <input type="text" placeholder='Nombre Daily' onChange={(e)=>{setCheckItem({...checkItem, name:e.target.value})}}/>
                        <button type='submit'>agregar</button>        
                    </form>
                </details>
            </div>
            
        </div>
    )
}

export default CheckList