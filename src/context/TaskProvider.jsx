import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  // const [taskFormControls, setTaskFormControls] = useState({});

  const CONTEXT_VALUE = useMemo(() => ({
    tasks,
    setTasks,
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
