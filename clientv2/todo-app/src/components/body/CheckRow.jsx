import React from 'react'
import { useEffect } from 'react'
import { useContextProvider } from '../util/global.context'




const CheckRow = (props) => {

    const item = props.data

    const contextCheckState = useContextProvider().contextCheckState
    const setContextCheckState = useContextProvider().setContextCheckState



    const completeCheckItem = ()=> {
        var arrayChecks = contextCheckState.checks
        
        arrayChecks.forEach(check => {
            console.log(check)
            if (check.ID === item.ID && !check.COMPLETED) {
                
                check.COMPLETED = true
                check.TIMES_COMPLETED += 1
                check.STREAK += 1
            } else if (check.ID === item.ID && check.COMPLETED){
                check.COMPLETED = false
                check.STREAK -= 1
                check.TIMES_COMPLETED -= 1
            }

        });

        setContextCheckState({checks: arrayChecks})
    }

    useEffect(()=>{},[contextCheckState])

    return (
        <div className="itemWrapper">
            <div className="checkItem">
                <p className='itemName'>{item.NAME}</p>
                <p id='done'>{item.TIMES_COMPLETED}</p>
                <p id='notDone'>{item.TIMES_NOTCOMPLETED}</p>
                <p id='streak'>{item.STREAK}</p>
                <p id='actionCheck'><button onClick={completeCheckItem}>{item.COMPLETED? "Undone":"Complete"}</button></p>
            </div>
        </div>
        
    )
}

export default CheckRow