import { Avatar, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signOut());
  };
  return (
    <>
      <Tooltip title={name}>
        <Avatar>{name[0]}</Avatar>
      </Tooltip>
      <IconButton
        component={NavLink}
        to="/"
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
