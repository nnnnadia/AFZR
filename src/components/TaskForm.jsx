import React, { useState, useContext } from 'react';
import TaskContext from '../context';
import { Button, Stack, TextField } from '@mui/material';
import { PaperForm } from '../styles';

function TaskForm() {
  const [task, setTask] = useState({ description: '' });
  const { tasks, setTasks } = useContext(TaskContext);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task.description]);
    setTask({ ...task, description: '' });
  }

  return (
    <form>
      <PaperForm elevation={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            id="standard-basic"
            label="Nova tarefa"
            variant="standard"
            color="secondary"
            value={ task.description }
            onChange={ ({ target }) => setTask({ ...task, description: target.value }) }
          />
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            disabled={ task.description.length === 0 }
            onClick={ handleTaskSubmit }
          >
            Nova tarefa
          </Button>
        </Stack>
      </PaperForm>
    </form>
  );
}

export default TaskForm;
