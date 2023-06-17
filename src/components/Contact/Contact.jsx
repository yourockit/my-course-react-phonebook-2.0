import {
  Avatar,
  Collapse,
  Container,
  Divider,
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
        <Container component="li" key={id} sx={{ p: 0 }}>
          <ListItemButton
            onClick={() => handleClick(id)}
            sx={{ pl: 0, pr: 0, zIndex: 2 }}
          >
            <ListItemAvatar>
              <Avatar>{name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText>{name}</ListItemText>
          </ListItemButton>
          <Collapse in={selectedContact === id}>
            <ContactDetails number={number} name={name} id={id} />
          </Collapse>
          <Divider variant="inset" />
        </Container>
      ))}
    </>
  );
};
