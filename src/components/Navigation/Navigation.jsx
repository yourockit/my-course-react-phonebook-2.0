import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ isLoggedIn }) => {
  return (
    <nav>
      <Button color="inherit" component={NavLink} to="/">
        Home
      </Button>
      {isLoggedIn && (
        <Button color="inherit" component={NavLink} to="/contacts">
          Contacts
        </Button>
      )}
    </nav>
  );
};
