import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Button component={NavLink} to="/signup" color="inherit">
        Sign up
      </Button>
      <Button component={NavLink} to="/signin" color="inherit">
        Sign in
      </Button>
    </>
  );
};
