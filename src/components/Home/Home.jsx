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
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          color: 'primary.contrastText',
          mt: '-80px',
        }}
      >
        <Typography
          align="center"
          variant="h4"
          mb={2}
          fontWeight={700}
          color="inherit"
        >
          Phonebook welcome page
        </Typography>
        {isLoggedIn ? (
          <Stack direction="row" spacing={1}>
            <Typography align="center" variant="h5">
              Go to
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
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
