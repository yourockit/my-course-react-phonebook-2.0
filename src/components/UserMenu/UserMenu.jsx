import { Avatar, Box, Button, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signOut());
  };
  return (
    <>
      <Box sx={{ flexGrow: 0, ml: 1 }}>
        <Tooltip title={name}>
          <Avatar>{name[0]}</Avatar>
        </Tooltip>
      </Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <LogoutIcon />
      </IconButton>
    </>
  );
};
