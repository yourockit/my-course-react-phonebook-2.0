import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';
import { Contact } from 'components/Contact/Contact';
import { Fragment } from 'react';
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
    <Paper square sx={{ pt: '50px' }}>
      <List>
        {Object.entries(groupedContacts).map(([symbol, contacts]) => {
          return (
            <Fragment key={symbol}>
              <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                {symbol}
              </ListSubheader>
              <ListItem>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                  }}
                >
                  {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                      <ListItem button alignItems="flex-start">
                        <Contact id={id} name={name} number={number} />
                      </ListItem>
                      <Divider variant="inset" />
                    </li>
                  ))}
                </List>
              </ListItem>
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
};
