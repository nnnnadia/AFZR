import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContent, Divider, List, ListItem, ListItemText,
} from '@mui/material';
import TaskContext from '../../context/TaskContext';
import ListItemCardTaskCompletedText from '../../styles/ListItemCardTaskCompletedText';

function CalendarCardTasksList({ date }) {
  const [tasksOfTheDay, setTasksOfTheDay] = useState([]);
  const { tasks, handleDone } = useContext(TaskContext);

  useEffect(
    () => {
      setTasksOfTheDay(tasks
        .filter(({ date: taskDate }) => taskDate.toDateString() === date.toDateString()));
    },
    [tasks],
  );

  return (
    <CardContent>
      <List>
        {tasksOfTheDay && tasksOfTheDay.map((task, index) => (
          <div key={task.id}>
            {index !== 0 && <Divider />}
            <ListItem
              disablePadding
              sx={{ userSelect: 'none' }}
              onDoubleClick={() => handleDone(task.id)}
            >
              {task.done
                ? <ListItemCardTaskCompletedText primary={task.description} />
                : <ListItemText primary={task.description} />}
            </ListItem>
          </div>
        ))}
      </List>
    </CardContent>
  );
}

CalendarCardTasksList.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarCardTasksList;
