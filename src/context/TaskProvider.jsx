import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import { readLocalStorage, saveLocalStorage } from '../services/localStorage';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(readLocalStorage());
  const [taskFormControls, setTaskFormControls] = useState({
    description: '',
    date: new Date(),
    done: false,
  });
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [sortedDates, setSortedDates] = useState([]);

  /**
   * https://masteringjs.io/tutorials/fundamentals/sort-by-date
   */
  const getSortedDates = () => {
    const uniqueDates = [...new Set(
      tasks.map((task) => task.date.toDateString()),
    )];
    setSortedDates(uniqueDates
      .map((date) => new Date(date))
      .sort((date1, date2) => date1 - date2));
  };

  const handleDone = (idToBeDone) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idToBeDone) return { ...task, done: !task.done };
      return task;
    });
    setTasks(updatedTasks);
  };

  useEffect(
    () => {
      saveLocalStorage(tasks);
      if (tasks) getSortedDates();
    },
    [tasks],
  );

  const CONTEXT_VALUE = useMemo(() => ({
    tasks,
    setTasks,
    handleDone,
    task: taskFormControls,
    setTask: setTaskFormControls,
    todaysDate,
    setTodaysDate,
    sortedDates,
  }));

  return (
    <TaskContext.Provider value={CONTEXT_VALUE}>
      { children }
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
};

export default TaskProvider;
