import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, CardActionArea, Stack, Typography,
} from '@mui/material';
import TaskContext from '../../context/TaskContext';

function CalendarCardHeader({ date }) {
  const { task, setTask } = useContext(TaskContext);
  const getWeekDay = () => ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  return (
    <CardActionArea
      sx={{ p: 2 }}
      onClick={() => setTask({ ...task, date })}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Avatar
          variant="rounded"
          sx={{ width: 60, height: 60 }}
        >
          { getWeekDay()[date.getDay() - 1] }
        </Avatar>
        <Typography
          variant="h5"
        >
          {date.toLocaleDateString('pt-br')}
        </Typography>
      </Stack>
    </CardActionArea>
  );
}

CalendarCardHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarCardHeader;
