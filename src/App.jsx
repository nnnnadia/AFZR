import React from 'react';
import { Box, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TaskForm, TaskList } from './components';
import { TaskProvider } from './context';

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TaskProvider>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
                <TaskForm />
                <TaskList />
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
                <p>oi</p>
              </Grid>
            </Grid>
          </Box>
        </TaskProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
