import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from '@mui/material';
import CalendarCardHeader from './CalendarCardHeader';

function CalendarCard({ date }) {
  return (
    <Card
      sx={{ p: 4, maxWidth: '250px' }}
    >
      <CalendarCardHeader date={date} />
    </Card>
  );
}

CalendarCard.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarCard;
