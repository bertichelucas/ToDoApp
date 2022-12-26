import React from "react"
import './checklist.css'

const arraynum = [1,2,3 ,4, 5]

const CheckList = () =>{


    return (
        <div className="checkBody">
            <div className="checkInfo">
                <h1>CheckList</h1>
                <h2>Points</h2>
            </div>
         {arraynum.map(num => <div className="itemWrapper"><div className="checkItem">{num}</div></div>)}
        </div>
    )
}

export default CheckList