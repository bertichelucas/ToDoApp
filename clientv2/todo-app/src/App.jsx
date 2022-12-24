import React from 'react'
import Header from './components/headers/Header.jsx'
import ToDoList from './components/body/ToDoList.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"

//npm start to start the app

function App() {

    
    return (
        <div className="App">
            
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/todo' element={<ToDoList></ToDoList>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App