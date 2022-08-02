import React, { useContext } from 'react';
import {
  List, ListItem, ListItemButton, IconButton, ListItemText, ListItemIcon,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FlakyIcon from '@mui/icons-material/Flaky';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { TaskContext } from '../context';

function TaskList() {
  const {
    tasks, handleDelete, handleEdit, handleDone, task: { date: formDate }, selectedTask,
  } = useContext(TaskContext);

  return (
    <List>
      { tasks
        .filter(({ date }) => date.getDate() === formDate.getDate()
          && date.getMonth() === formDate.getMonth()
          && date.getYear() === formDate.getYear())
        .map(({ id, description, done }) => (
          <ListItem
            key={id}
            secondaryAction={(
              <div hidden={selectedTask !== id}>
                <IconButton onClick={() => handleDelete(id)}>
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton onClick={() => handleDone(id)}>
                  <FlakyIcon />
                </IconButton>
              </div>
            )}
            disablePadding
          >
            <ListItemButton
              selected={selectedTask === id}
              onClick={() => handleEdit(id)}
            >
              <ListItemIcon>
                {done
                  ? <FavoriteTwoToneIcon color="primary" />
                  : <HeartBrokenOutlinedIcon color="primary" />}
              </ListItemIcon>
              <ListItemText primary={description} />
            </ListItemButton>
          </ListItem>
        )) }
    </List>
  );
}

export default TaskList;
