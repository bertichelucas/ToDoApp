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
                <p>Times Done: {item.TIMES_COMPLETED}</p>
                <p>Times not Done: {item.TIMES_NOTCOMPLETED}</p>
                <p>Streak: {item.STREAK}</p>
                <button onClick={completeCheckItem}>{item.COMPLETED? "Undone":"Complete"}</button>
            </div>
        </div>
        
    )
}

export default CheckRow