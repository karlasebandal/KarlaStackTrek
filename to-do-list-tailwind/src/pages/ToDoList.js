import '../assets/styles/App.css';
import React, { useState } from 'react';

function ToDoList() {

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
      <div class="flex items-center p-5 mx-5 my-3 border border-gray-200 rounded dark:border-gray-700" key={task.id}>
        <div class="flex flex-row">
          <div> 
            <input
              type="checkbox"
              checked={task.completed}
              id="bordered-checkbox-1"
              name="bordered-checkbox"
              class="w-4 h-4 text-rose-400 bg-gray-100 border-gray-300 rounded focus:ring-rose-500 dark:focus:ring-rose-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => toggleTaskCompletion(task.id)}
            />
          </div> 

          <div class="gap-2"> 
            <span 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              class="text-rose-400 px-3">
              {task.text}
            </span>
          </div>

          <div class="px-5">
            <span class="text-xs gap-3 text-gray-400">{task.date}</span>
          </div>
          
          <div class="px-5">
            <button 
              class="text-rose-400 font-extrabold"
              onClick={() => deleteTask(task.id)}>x</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div class="container mx-auto px-4">
      <div class="flex flex-row m-5 space-x-4">
        <div class="h-50 basis-1/4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-rose-400 md:text-5xl lg:text-6xl dark:text-white">ToDo List</h1>
            <div class="relative">
              <input type="text" value={inputValue} onChange={handleInputChange}  class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rose-400 focus:border-rose-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add To-Do Here"/>
              <button variant="primary" onClick={addTask} class="text-white absolute right-2.5 bottom-2.5 bg-rose-400 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Add Task</button>
            </div>
          </form>
        </div>

        <div class="basis-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-base text-rose-400 p-5">All Tasks</h2>

          <div class="flex flex-col">
            {renderTasks(tasks)}
          </div>
        </div>

        <div class="basis-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-base text-rose-400 p-5">Active Tasks</h2>
          <div class="flex flex-col">
            {renderTasks(filterCompletedTasks())}
          </div>
        </div>

        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-rose shadow md:flex md:items-center md:justify-between md:p-6 ">
          <span class="text-sm text-gray-500 sm:text-center">© 2023 RF1 Batch™. All Rights Reserved.
          </span>
        </footer> 
      </div>
  </div>
  );
}

export default ToDoList;


