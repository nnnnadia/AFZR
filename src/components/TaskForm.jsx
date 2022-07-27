import React, { useContext } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import {
  Button, Paper, Stack, TextField,
} from '@mui/material';
import { TaskContext } from '../context';

function TaskForm() {
  const {
    tasks,
    setTasks,
    task,
    setTask,
  } = useContext(TaskContext);

  const getTaskId = () => Date.now();

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { ...task, id: getTaskId() }]);
    setTask({ ...task, description: '' });
  };

  return (
    <form>
      <Paper
        elevation={2}
        sx={{ p: 4 }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
        >
          <TextField
            fullWidth
            id="standard-basic"
            label="Nova tarefa"
            variant="standard"
            color="secondary"
            value={task.description}
            onChange={({ target }) => setTask({ ...task, description: target.value })}
          />
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            disabled={task.description.length === 0}
            onClick={handleTaskSubmit}
          >
            Nova tarefa
          </Button>
        </Stack>
        <DatePicker
          label="Escolha a data"
          value={task.date}
          onChange={(newDate) => setTask({ ...task, date: new Date(newDate) })}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField fullWidth color="secondary" {...params} />}
        />
      </Paper>
    </form>
  );
}

export default TaskForm;
