import React from 'react';
import { Box, Grid, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TaskForm, TaskList } from './components';
import { TaskProvider } from './context';
import theme from './styles/Theme';

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TaskProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ p: 2, backgroundColor: grey[900], height: '100vh' }}>
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
          </ThemeProvider>
        </TaskProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
