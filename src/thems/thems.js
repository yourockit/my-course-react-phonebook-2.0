import { createTheme } from '@mui/material';

export const contactTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f92bb',
          backgroundImage: `linear-gradient(to top, #0f92bb, #78c4be 80%)`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#78c4be',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f92bb',
      contrastText: '#ffffff',
    },
    buttonText: {
      main: '#ffffff',
    },
  },
});
