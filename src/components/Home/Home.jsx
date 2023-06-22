import { Button, Container, Stack, Typography } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography align="center" variant="h4" mb={2}>
          Phonebook welcome page
        </Typography>
        {isLoggedIn ? (
          <Stack direction="row" spacing={1}>
            <Typography align="center" variant="h5">
              Go to
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              component={NavLink}
              to="/contacts"
            >
              Contacts
            </Button>
          </Stack>
        ) : (
          <AuthNav />
        )}
      </Container>
    </>
  );
};
