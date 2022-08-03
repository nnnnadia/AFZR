import React, { useContext } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import {
  Button, Paper, Stack, TextField,
} from '@mui/material';
import { TaskContext } from '../context';

function TaskForm() {
  const {
    task,
    setTask,
    selectedTask,
    handleSubmit,
    handleEdit,
  } = useContext(TaskContext);

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
            variant="filled"
            color="secondary"
            id="standard-basic"
            label="Nova tarefa"
            value={task.description}
            onChange={({ target }) => setTask({ ...task, description: target.value })}
          />
          <Button
            variant="contained"
            color="secondary"
            type="button"
            disabled={task.description.length === 0}
            onClick={selectedTask ? () => handleEdit(selectedTask) : () => handleSubmit()}
          >
            {selectedTask ? 'Editar tarefa' : 'Nova tarefa'}
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
