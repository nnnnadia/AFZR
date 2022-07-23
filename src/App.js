import { Grid } from '@mui/material';
import React from 'react';
import { TaskForm, TaskList } from './components';
import { TaskProvider } from './context';

function App() {
  return (
    <div>
      <TaskProvider>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
            <TaskForm />
            <TaskList />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
            <p>oi</p>
          </Grid>
        </Grid>
      </TaskProvider>
    </div>
  );
}

export default App;
