import { MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavigationMobile = ({ isLoggedIn, onClose }) => {
  return (
    <nav>
      <MenuItem color="inherit" component={NavLink} to="/" onClick={onClose}>
        Home
      </MenuItem>
      {isLoggedIn && (
        <MenuItem
          color="inherit"
          component={NavLink}
          to="/contacts"
          onClick={onClose}
        >
          Contacts
        </MenuItem>
      )}
    </nav>
  );
};
