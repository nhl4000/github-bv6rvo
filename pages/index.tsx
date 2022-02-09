import React, { useState } from 'react';
import data from './data.json';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id: Number) => {
    let mapped = toDoList.map((task: any) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task: any) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput: string) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
