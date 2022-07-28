export const saveLocalStorage = (data) => {
  localStorage.setItem(
    'tasks',
    JSON.stringify(data.map((task) => ({
      ...task,
      date: Date.parse(task.date),
    }))),
  );
};

export const readLocalStorage = () => {
  if (localStorage.getItem('tasks')) {
    return JSON.parse(
      localStorage.getItem('tasks'),
    ).map((task) => ({
      ...task,
      date: new Date(task.date),
    }));
  }
  return [];
};
