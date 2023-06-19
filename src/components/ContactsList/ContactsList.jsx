import { Box, Grid } from '@mui/material';
import { Contact } from 'components/Contact/Contact';
import { useContacts } from 'hooks/useContacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';

export const ContactsList = () => {
  const { contacts } = useContacts();
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Box pt={{ xs: 8, sm: 10 }}>
      <Grid
        component="ul"
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        <Contact contacts={filteredContacts} />
      </Grid>
    </Box>
  );
};
