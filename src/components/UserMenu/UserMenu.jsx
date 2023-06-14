import { Button } from '@mui/material';
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
      <p> {name}</p>
      <Button
        type="submit"
        variant="text"
        color="inherit"
        onClick={handleClick}
        component={NavLink}
        to="/"
      >
        Sign out
      </Button>
    </>
  );
};
