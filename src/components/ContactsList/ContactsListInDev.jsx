import { Box, Grid, List, ListItem, ListSubheader } from '@mui/material';
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

  //GROUP-CONTACTS======================
  const groupedContacts = {};
  filteredContacts.map(contact => {
    const firstLeter = contact.name[0].toUpperCase();
    if (!groupedContacts[firstLeter]) {
      groupedContacts[firstLeter] = [];
    }
    return groupedContacts[firstLeter].push(contact);
  });
  //======================================

  return (
    <Box pt={{ xs: 8, sm: 10 }}>
      <List>
        {Object.entries(groupedContacts).map(([symbol, contacts]) => {
          return (
            <ListItem
              key={symbol}
              sx={{ flexDirection: 'column', alignItems: 'start', p: 0 }}
            >
              <ListSubheader component="span" sx={{ bgcolor: 'transparent' }}>
                {symbol}
              </ListSubheader>
              <Grid
                component="ul"
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 4, md: 12 }}
              >
                <Contact contacts={filteredContacts} />
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
