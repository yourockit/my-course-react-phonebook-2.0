import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { editContact, addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = ({ id, name = '', number = '', title, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const valueName = data.get('name');
    const valueNumber = data.get('number');
    const contact = {
      name: valueName,
      number: valueNumber,
    };
    if (!valueName || !valueNumber) {
      toast.error('Not all fields are filled in');
      return;
    }
    if (contacts) {
      const isInContacts = contacts.some(
        contact => contact.name === valueName && contact.number === valueNumber
      );
      if (isInContacts) {
        toast.warning(
          `Contact: ${contact.valueName} with number: ${contact.valueNumber} is alredy exist`
        );
        return;
      }
    }
    if (name === '') {
      dispatch(addContact(contact));
    } else {
      dispatch(editContact({ id, contact }));
    }
    onClose();
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h7">{title}</Typography>
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
          defaultValue={name}
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
          defaultValue={number}
        />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          sx={{ mt: 3, mb: 2 }}
        >
          <Button type="submit" variant="text">
            Save
          </Button>
          <Button type="button" variant="text" onClick={() => onClose()}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
