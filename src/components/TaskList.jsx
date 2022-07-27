import React, { useState, useContext } from 'react';
import {
  List, ListItem, ListItemButton, IconButton, ListItemText,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TaskContext } from '../context';

function TaskList() {
  const [selectedTask, setSelectedTask] = useState(null);
  const { tasks, setTasks, task: { date: formDate } } = useContext(TaskContext);

  const handleDelete = (idToBeDeleted) => {
    const updatedTasks = tasks.filter(({ id }) => id !== idToBeDeleted);
    setTasks(updatedTasks);
  };

  return (
    <List>
      { tasks
        .filter(({ date }) => date.getDate() === formDate.getDate()
          && date.getMonth() === formDate.getMonth()
          && date.getYear() === formDate.getYear())
        .map(({ id, description }) => (
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
              onClick={selectedTask === id
                ? () => setSelectedTask(null) : () => setSelectedTask(id)}
            >
              <ListItemText primary={description} />
            </ListItemButton>
          </ListItem>
        )) }
    </List>
  );
}

export default TaskList;
