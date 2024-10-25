import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Stack spacing={1} direction="row" mr={1}>
      <Button
        component={NavLink}
        to="/signup"
        variant="outlined"
        color="inherit"
      >
        Sign up
      </Button>
      <Button
        component={NavLink}
        to="/signin"
        variant="outlined"
        color="inherit"
      >
        Sign in
      </Button>
    </Stack>
  );
};
