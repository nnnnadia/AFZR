import { List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState, useContext } from 'react';
import TaskContext from '../context';

function TaskList() {
  const [selectedTask, setSelectedTask] = useState(null);
  const { tasks } = useContext(TaskContext);

  return (
    <List>
      { tasks.map((task, index) => (
        <ListItemButton
          key={ index }
          selected={ selectedTask === index }
          onClick={ () => setSelectedTask(index) }
        >
          <ListItemText primary={ task } />
        </ListItemButton>
      )) }
    </List>
  );
}

export default TaskList;
