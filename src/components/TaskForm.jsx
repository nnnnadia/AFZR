import React, { useState, useContext } from 'react';
import TaskContext from '../context';

function TaskForm() {
  const [task, setTask] = useState({ description: '' });
  const { tasks, setTasks } = useContext(TaskContext);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task.description]);
    setTask({ ...task, description: '' });
  }

  return (
    <form>
      <input
        type="text"
        value={ task.description }
        onChange={ ({ target }) => setTask({ ...task, description: target.value }) }
      />
      <button
        type="submit"
        disabled={ task.description.length === 0 }
        onClick={ handleTaskSubmit }
      >
        Nova tarefa
      </button>
    </form>
  );
}

export default TaskForm;
