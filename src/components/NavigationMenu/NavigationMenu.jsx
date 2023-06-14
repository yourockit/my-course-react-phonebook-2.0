import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavigationMenu = ({ isLoggedIn }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button color="inherit" component={NavLink} to="/">
          Home
        </Button>
        {isLoggedIn && (
          <Button color="inherit" component={NavLink} to="/contacts">
            Contacts
          </Button>
        )}
      </Box>
    </>
  );
};
