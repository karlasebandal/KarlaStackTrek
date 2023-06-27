
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        priority: 'Low',
        date: new Date().toLocaleDateString(),
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // rest 
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filterCompletedTasks = () => {
    return tasks.filter((task) => !task.completed);
  };

  const renderTasks = (taskList) => {
    return taskList.map((task) => (
      <div key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
        <span>({task.priority})</span>
        <span>{task.date}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    ));
  };

  const buttonStyle = {
      backgroundColor: '#f09c67',
      color: 'white',
      borderRadius: '5px',
      padding: '10px 10px',
      marginLeft:'10px'
    };

    const inputStyle = {
      height: "33px",
      borderRadius: '5px'
    };

  return (
    <div container>
      <h1>ToDo List App</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} style={inputStyle}/>
        <button variant="primary" onClick={addTask} style={buttonStyle}>Add Task</button>
      </div>
      <div>
        <h2>All Tasks</h2>
        {renderTasks(tasks)}
      </div>
      <div>
        <h2>Active Tasks</h2>
        {renderTasks(filterCompletedTasks())}
      </div>
      <div>
        <p>@RF1 BATCH</p>
      </div>
    </div>
  );
}

export default TodoList;

/*
export default function App() {
  return (
      <div>
        When controlling the flow of text, using the CSS property
        <span class="inline">display: inline</span>
        will cause the text inside the element to wrap normally.

        While using the property <span class="inline-block">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond its parent.

        Lastly, using the property <span class="block">display: block</span>
        will put the element on its own line and fill its parent.
      </div>

  )
}
*/