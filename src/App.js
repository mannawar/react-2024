import Task from './Task';
import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange =(event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0? 1: todoList[todoList.length -1].id +1,
      taskName: newTask,
      completed: false
    };
    setToDoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setToDoList(todoList.map((task) => {
      if(task.id === id){
          return {...task, completed: !task.completed}
      }
      return task;
    }))
  }

  return (
    <>
      <div className='App'>
        "Allah is the only God!"
        <div className='addTask'>
          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task) => {
            return <Task key={task.id} taskName={task.taskName} id={task.id} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask}/>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
