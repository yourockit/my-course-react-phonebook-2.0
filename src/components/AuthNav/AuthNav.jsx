import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Stack spacing={1} direction="row">
      <Button
        component={NavLink}
        to="/signup"
        color="buttonText"
        variant="outlined"
      >
        Sign up
      </Button>
      <Button
        component={NavLink}
        to="/signin"
        color="buttonText"
        variant="outlined"
      >
        Sign in
      </Button>
    </Stack>
  );
};
