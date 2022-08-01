import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from '@mui/material';
import { CalendarCardHeader, CalendarCardTasksList } from './calendar-card';

function CalendarCard({ date }) {
  return (
    <Card
      sx={{ minWidth: '250px' }}
    >
      <CalendarCardHeader date={date} />
      <CalendarCardTasksList date={date} />
    </Card>
  );
}

CalendarCard.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarCard;
