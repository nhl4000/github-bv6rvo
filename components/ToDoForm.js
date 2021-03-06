import { useState } from 'react';
import styles from './ToDoForm.module.css';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        className="border-2 px-4 py-2"
        placeholder="Enter task..."
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default ToDoForm;
