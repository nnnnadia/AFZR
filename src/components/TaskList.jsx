import React, { useState, useContext } from 'react';
import { List, ListItem, ListItemButton, IconButton, ListItemText } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TaskContext from '../context';

function TaskList() {
  const [selectedTask, setSelectedTask] = useState(null);
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDelete = (indexToBeDeleted) => {
    const updatedTasks = tasks.filter((_task, index) => index !== indexToBeDeleted);
    setTasks(updatedTasks);
  };

  return (
    <List>
      { tasks.map((task, index) => (
        <ListItem
          key={ index }
          secondaryAction={
            <div hidden={ selectedTask !== index }>
              <IconButton onClick={ () => handleDelete(index) }>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          }
          disablePadding
        >
          <ListItemButton
            selected={ selectedTask === index }
            onClick={ () => setSelectedTask(index) }
          >
            <ListItemText primary={ task } />
          </ListItemButton>
        </ListItem>
      )) }
    </List>
  );
}

export default TaskList;
