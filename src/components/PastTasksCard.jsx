import {
  Badge, Card, CardActions, CardContent, List, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { TaskContext } from '../context';

function PastTasksCard() {
  const { task: taskForm, setTask, pastTasks } = useContext(TaskContext);

  return (
    <Card
      sx={{ minWidth: '250px' }}
    >
      <CardContent
        sx={{
          height: '60px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <Badge badgeContent={pastTasks.length} color="primary">
          <Typography
            variant="h5"
          >
            Tarefas atrasadas
          </Typography>
        </Badge>
      </CardContent>
      <CardActions>
        <List sx={{ width: '100%' }}>
          {pastTasks && pastTasks.map(({ date, description, id }) => (
            <ListItemButton
              key={id}
              dense
              onClick={() => setTask({ ...taskForm, date, description })}
            >
              <ListItemText primary={description} />
            </ListItemButton>
          ))}
        </List>
      </CardActions>
    </Card>
  );
}

export default PastTasksCard;
