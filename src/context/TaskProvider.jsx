import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [taskFormControls, setTaskFormControls] = useState({
    description: '',
    date: new Date(),
  });
  const [todaysDate, setTodaysDate] = useState(new Date());

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
