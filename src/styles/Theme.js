import { createTheme } from '@mui/material';
import { orange, grey, cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: orange[500],
    },
    secondary: {
      main: cyan[200],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
});

export default theme;
