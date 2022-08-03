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
  const [selectedTask, setSelectedTask] = useState(null);
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [sortedDates, setSortedDates] = useState([]);
  const [pastTasks, setPastTasks] = useState([]);

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

  const getPastTasks = () => {
    const pastUnfinishedTasks = tasks
      .filter(({ date, done }) => (
        date < todaysDate
        && date.getDate() !== todaysDate.getDate()
        && !done));
    setPastTasks(pastUnfinishedTasks);
  };

  const getTaskId = () => Date.now();

  const handleSubmit = () => {
    setTasks([...tasks, { ...taskFormControls, id: getTaskId() }]);
    setTaskFormControls({ ...taskFormControls, description: '' });
  };

  const handleEdit = (id) => {
    const stillTasks = tasks.filter((task) => task.id !== id);
    setTasks([...stillTasks, { ...taskFormControls, id }]);
    setTaskFormControls({ ...taskFormControls, description: '', done: false });
  };

  const handleDone = (idToBeDone) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idToBeDone) return { ...task, done: !task.done };
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (idToBeDeleted) => {
    const updatedTasks = tasks.filter(({ id }) => id !== idToBeDeleted);
    setTasks(updatedTasks);
    setTaskFormControls({ ...taskFormControls, done: false, description: '' });
    setSelectedTask(null);
  };

  const handleSelect = (idToBeEdited) => {
    if (selectedTask === idToBeEdited) {
      setSelectedTask(null);
      setTaskFormControls({ ...taskFormControls, done: false, description: '' });
    } else {
      setSelectedTask(idToBeEdited);
      const { date, description, done } = tasks.find((savedTask) => savedTask.id === idToBeEdited);
      setTaskFormControls({
        date,
        description,
        done,
      });
    }
  };

  useEffect(
    () => {
      saveLocalStorage(tasks);
      if (tasks) {
        getSortedDates();
        getPastTasks();
      }
    },
    [tasks],
  );

  const CONTEXT_VALUE = useMemo(() => ({
    tasks,
    setTasks,
    task: taskFormControls,
    setTask: setTaskFormControls,
    selectedTask,
    setSelectedTask,
    todaysDate,
    setTodaysDate,
    sortedDates,
    pastTasks,
    handleSubmit,
    handleEdit,
    handleDone,
    handleDelete,
    handleSelect,
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
