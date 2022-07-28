import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, CardActionArea, Stack, Typography,
} from '@mui/material';

function CalendarCardHeader({ date }) {
  const getWeekDay = () => ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  return (
    <CardActionArea>
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
