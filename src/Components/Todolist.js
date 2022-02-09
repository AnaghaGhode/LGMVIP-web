import React from 'react';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function Todolist() {

    //state array to hold all todos
    const [todos, setTodos] = useState([]);

    //Add todo
    const addTask = task => {
        if (!task.text) {
            return
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    //remove todo
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id != id)
        setTodos(updatedTasks)
    }

    //task completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id == id) {
                todo.iscomplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

    return (
        <div>
            <p className='main'>My To Do List</p>
            <TodoForm addTask={addTask}></TodoForm>
            <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
        </div>
    );
}



