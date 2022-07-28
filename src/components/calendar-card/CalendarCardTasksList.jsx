import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContent, Divider, List, ListItem, ListItemText,
} from '@mui/material';
import TaskContext from '../../context/TaskContext';

function CalendarCardTasksList({ date }) {
  const [tasksOfTheDay, setTasksOfTheDay] = useState([]);
  const { tasks } = useContext(TaskContext);

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
        { tasksOfTheDay && tasksOfTheDay.map((task, index) => (
          <>
            {index !== 0 && <Divider />}
            <ListItem key={task.id} disablePadding>
              <ListItemText primary={task.description} />
            </ListItem>
          </>
        ))}
      </List>
    </CardContent>
  );
}

CalendarCardTasksList.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarCardTasksList;
