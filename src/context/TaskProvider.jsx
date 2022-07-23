import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const setTasksStringfied = (newData, add = false) => {
    if(add) {
      setTasks([...tasks, JSON.stringify({ ...newData })]);
    } else {
      setTasks([...newData.map((task) => JSON.stringify(task))]);
    }
  };

  const getTasksParsed = () => {
    const parsedTasks = tasks.map((task) => JSON.parse(task))
    return parsedTasks;
  }

  const CONTEXT_VALUE = {
    tasks,
    setTasks,
    setTasksStringfied,
    getTasksParsed,
  };

  return (
    <TaskContext.Provider value={ CONTEXT_VALUE }>
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
