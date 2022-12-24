import { useState } from "react";
import { createContext, useContext } from "react";
import axios from 'axios'
import { useEffect } from "react";





const initialState = {tasks: []}
const ContextGlobal = createContext(initialState)



export const ContextProvider = ({ children }) => {

    
    const [contextState, setContextState] = useState(initialState)

    useEffect(()=>{
        let url = `http://localhost:5000/api`
        axios.get(url)
        .then(res => setContextState({tasks: res.data}))
    },[])

    return (
        <ContextGlobal.Provider value={{contextState, setContextState}}>
        {children}
        </ContextGlobal.Provider>
    );
};

export const useContextProvider = () =>{
    return useContext(ContextGlobal)
}