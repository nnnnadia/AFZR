import React, { useContext } from 'react';
import { Fab, Stack } from '@mui/material';
import moment from 'moment';
import TaskContext from '../context/TaskContext';
import CalendarCard from './CalendarCard';
import PastTasksCard from './PastTasksCard';
import LiterallyStackOverflow from '../styles/LiterallyStackOverflow';

function Calendar() {
  const { todaysDate, sortedDates, pastTasks } = useContext(TaskContext);
  return (
    <div>
      <LiterallyStackOverflow direction="row" spacing={2}>
        {pastTasks && <PastTasksCard />}
        <Stack sx={{ position: 'relative' }}>
          <CalendarCard date={todaysDate} />
          <Fab sx={{ position: 'absolute', right: 5, top: 75 }} color="secondary">
            {sortedDates
              && moment((sortedDates.find((date) => date > todaysDate)))
                .diff(todaysDate, 'days') + 1}
          </Fab>
        </Stack>
        {sortedDates && sortedDates.map((date) => {
          if (date > todaysDate) {
            return <CalendarCard key={date.toDateString()} date={date} />;
          }
          return null;
        })}
      </LiterallyStackOverflow>
    </div>
  );
}

export default Calendar;
