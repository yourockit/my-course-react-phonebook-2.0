import { Container, Grid } from '@mui/material';
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
    <Container
      maxWidth="md"
      sx={{
        overflowX: 'auto',
        p: '0 !important',
      }}
    >
      <Grid
        component="ul"
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
        sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' }, pb: '56px' }}
      >
        <Contact contacts={filteredContacts} />
      </Grid>
    </Container>
  );
};
