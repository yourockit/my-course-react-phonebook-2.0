import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const number = data.get('number');
    if (!name || !number) {
      return;
    }
    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );
    onClose();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add contact
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Number"
            type="text"
            id="number"
            autoComplete="off"
          />
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
            sx={{ mt: 3, mb: 2 }}
          >
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button type="button" variant="contained" onClick={() => onClose()}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
