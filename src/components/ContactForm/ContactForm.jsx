import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { editContact, addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { FormattedInput } from './FormatedInput/FormatedInput';
import { useState } from 'react';

export const ContactForm = ({ id, name = '', number = '', title, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  //NUMBER-MASK===================
  const [inputValueNumber, setInputValueNumber] = useState({
    textmask: '',
  });
  const handleChange = event => {
    setInputValueNumber({
      ...inputValueNumber,
      [event.name]: event.value,
    });
  };
  //==============================

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const valueName = data.get('name');
    const valueNumber = inputValueNumber.textmask;
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
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          type="text"
          autoComplete="off"
          defaultValue={name}
        />
        <FormattedInput number={number} onInputChange={handleChange} />
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
