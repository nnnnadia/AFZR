import React from 'react';
import { Grid } from '@mui/material';
import { TaskForm, TaskList } from './components';
import { DateProvider, TaskProvider } from './context';

function App() {
  return (
    <div>
      <DateProvider>
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
      </DateProvider>
    </div>
  );
}

export default App;
