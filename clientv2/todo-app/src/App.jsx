import React from 'react'
import Header from './components/headers/Header.jsx'
import ToDoList from './components/body/ToDoList.jsx'


//npm start to start the app

function App() {

    
    return (
        <div className="App">
            
            <Header></Header>
            <ToDoList></ToDoList>
        </div>
    )
}

export default App