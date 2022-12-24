import React from 'react'
import Header from './components/headers/Header.jsx'
import ToDoList from './components/body/ToDoList.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ContextProvider } from './components/util/global.context.jsx'

//npm start to start the app

function App() {

    
    return (
        <div className="App">
            
            <BrowserRouter>
                <ContextProvider>
                    <Header></Header>
                    <Routes>
                        <Route path='/todo' element={<ToDoList></ToDoList>}/>
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </div>
    )
}

export default App