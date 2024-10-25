import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userName = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    if (!email || !password || !userName) {
      return;
    }
    dispatch(
      signUp({
        name: userName,
        email: email,
        password: password,
      })
    );
  };

  const inputTextStyles = {
    color: 'inherit',
  };

  return (
    <Container maxWidth="xs">
      <Box
        color="primary.contrastText"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            autoComplete="off"
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
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
            autoComplete="off"
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
