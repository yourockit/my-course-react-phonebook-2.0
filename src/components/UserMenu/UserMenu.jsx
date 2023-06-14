import { Avatar, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Search } from 'components/Search/Search';

export const UserMenu = ({ location }) => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const CONTACTS_LOCATION = '/contacts';
  const handleClick = () => {
    dispatch(signOut());
  };
  return (
    <>
      {location === CONTACTS_LOCATION && <Search />}
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
