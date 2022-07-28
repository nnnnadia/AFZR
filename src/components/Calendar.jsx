import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import CalendarCard from './CalendarCard';

function Calendar() {
  const { todaysDate } = useContext(TaskContext);
  return (
    <div>
      <CalendarCard date={todaysDate} />
    </div>
  );
}

export default Calendar;
