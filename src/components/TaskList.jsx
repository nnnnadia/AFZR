import React, { useState, useContext } from 'react';
import {
  List, ListItem, ListItemButton, IconButton, ListItemText,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TaskContext } from '../context';

function TaskList() {
  const [selectedTask, setSelectedTask] = useState(null);
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDelete = (idToBeDeleted) => {
    const updatedTasks = tasks.filter(({ id }) => id !== idToBeDeleted);
    setTasks(updatedTasks);
  };

  return (
    <List>
      { tasks.map(({ id, description }) => (
        <ListItem
          key={id}
          secondaryAction={(
            <div hidden={selectedTask !== id}>
              <IconButton onClick={() => handleDelete(id)}>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          )}
          disablePadding
        >
          <ListItemButton
            selected={selectedTask === id}
            onClick={() => setSelectedTask(id)}
          >
            <ListItemText primary={description} />
          </ListItemButton>
        </ListItem>
      )) }
    </List>
  );
}

export default TaskList;
