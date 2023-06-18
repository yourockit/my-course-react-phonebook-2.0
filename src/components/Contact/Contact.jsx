import {
  Avatar,
  Collapse,
  Divider,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import { useState } from 'react';

export const Contact = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleClick = id => {
    setSelectedContact(id === selectedContact ? null : id);
  };

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <Grid
          item
          component="li"
          key={id}
          xs={4}
          sm={2}
          md={3}
          sx={{ height: { sm: 153 } }}
        >
          <ListItemButton
            onClick={() => handleClick(id)}
            sx={{ pl: 0, pr: 0, zIndex: 1 }}
          >
            <ListItemAvatar>
              <Avatar>{name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number}></ListItemText>
          </ListItemButton>
          <Collapse in={selectedContact === id}>
            <ContactDetails number={number} name={name} id={id} />
          </Collapse>
          <Divider variant="inset" />
        </Grid>
      ))}
    </>
  );
};
