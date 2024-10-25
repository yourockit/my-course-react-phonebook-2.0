import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavigationMenuMobile = ({ isLoggedIn }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      {isLoggedIn ? (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <MenuItem component={NavLink} to="/" onClick={handleCloseNavMenu}>
              Home
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/contacts"
              onClick={handleCloseNavMenu}
            >
              Contacts
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
        </Box>
      )}
    </>
  );
};
