import React, { useContext } from 'react';
import TaskContext from '../context';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul>
      { tasks.map((task, index) => (
        <li key={ index }>{ task }</li>
      )) }
    </ul>
  );
}

export default TaskList;
