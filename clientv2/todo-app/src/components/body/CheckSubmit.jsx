import axios from 'axios'
import React from 'react'
import { useContextProvider } from '../util/global.context'


const CheckSubmit = () => {

    const contextCheckState = useContextProvider().contextCheckState

    const submitTaks = () => {
        axios.put(`http://localhost:5000/api/check/`, {checks: contextCheckState.checks})
    }

    return (
        <div>
            <button onClick={submitTaks}>Submit day</button>
        </div>
    )
}

export default CheckSubmit