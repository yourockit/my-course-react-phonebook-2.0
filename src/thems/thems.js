import { createTheme } from '@mui/material';

export const contactTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f92bb',
          backgroundImage: `linear-gradient(6deg,  #78c4be, #0f92bb 70%)`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0f92bb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#78c4be',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    action: {
      focus: '#666',
    },
  },
});
