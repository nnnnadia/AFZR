import React from 'react';
import { TaskForm, TaskList } from './components';
import { TaskProvider } from './context';

function App() {
  return (
    <div>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
