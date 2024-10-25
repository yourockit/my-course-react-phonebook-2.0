import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    if (!email || !password) {
      return;
    }
    dispatch(
      signIn({
        email: 'Jokovich@mail.com',
        password: 'Jokovich000',
      })
    );
  };

  const inputTextStyles = {
    color: 'inherit',
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        color="primary.contrastText"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value="Jokovich@mail.com"
            color="secondary"
            InputProps={{
              style: inputTextStyles,
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value="Jokovich000"
            color="secondary"
            InputProps={{
              style: inputTextStyles,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="inherit"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
