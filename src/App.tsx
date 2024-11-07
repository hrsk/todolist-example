import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {

    const todolistTitle1 = 'What to learn'
    const todolistTitle2 = 'Todolist title 2'

    const tasks1: TaskType[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: TaskType[] = [
        // { id: 1, title: 'Hello world', isDone: true },
        // { id: 2, title: 'I am Happy', isDone: false },
        // { id: 3, title: 'Yo', isDone: false },
    ]

    return (
        <div className="App">
            <Todolist title={todolistTitle1} tasks={tasks1}/>
            <Todolist title={todolistTitle2} tasks={tasks2}/>
        </div>
    );
}

export default App;
