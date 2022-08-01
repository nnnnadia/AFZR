import React, { useContext } from 'react';
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
        <CalendarCard date={todaysDate} />
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
