import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { NavigationMobile } from 'components/Navigation/NavigationMobile';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useState } from 'react';

export const PhonebookAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <NavigationMobile
                  isLoggedIn={isLoggedIn}
                  onClose={handleCloseNavMenu}
                />
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Navigation isLoggedIn={isLoggedIn} />
            </Box>
          )}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Navigation isLoggedIn={isLoggedIn} />
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
