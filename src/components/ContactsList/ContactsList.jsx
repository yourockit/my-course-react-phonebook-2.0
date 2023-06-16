import { Box, List } from '@mui/material';
import { Contact } from 'components/Contact/Contact';
// import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filterSlice';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  //GROUP-CONTACTS======================
  // const groupedContacts = {};
  // filteredContacts.map(contact => {
  //   const firstLeter = contact.name[0].toUpperCase();
  //   if (!groupedContacts[firstLeter]) {
  //     groupedContacts[firstLeter] = [];
  //   }
  //   return groupedContacts[firstLeter].push(contact);
  // });
  //======================================

  return (
    <Box pt={8}>
      {/* <List>
        {Object.entries(groupedContacts).map(([symbol, contacts]) => {
          return (
            <Fragment key={symbol}>
              {/* <ListSubheader sx={{ bgcolor: 'background.paper' }}> */}
      {/* {symbol} */}
      {/* </ListSubheader> *
              <ListItem sx={{ p: 0 }}> */}
      <List sx={{ width: '100%', p: 0 }}>
        <Contact contacts={filteredContacts} />
      </List>
      {/* </ListItem>
            </Fragment>
          );
        })}
      </List> */}
    </Box>
  );
};
