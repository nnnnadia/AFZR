import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import { readLocalStorage, saveLocalStorage } from '../services/localStorage';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(readLocalStorage());
  const [taskFormControls, setTaskFormControls] = useState({
    description: '',
    date: new Date(),
  });
  const [todaysDate, setTodaysDate] = useState(new Date());

  useEffect(
    () => saveLocalStorage(tasks),
    [tasks],
  );

  const CONTEXT_VALUE = useMemo(() => ({
    tasks,
    setTasks,
    task: taskFormControls,
    setTask: setTaskFormControls,
    todaysDate,
    setTodaysDate,
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
