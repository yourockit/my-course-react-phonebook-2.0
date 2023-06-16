import {
  Avatar,
  Collapse,
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
        <li key={id}>
          <ListItemButton onClick={() => handleClick(id)}>
            <ListItemAvatar>
              <Avatar>{name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText>{name}</ListItemText>
          </ListItemButton>
          <Collapse in={selectedContact === id}>
            <ContactDetails number={number} name={name} id={id} />
          </Collapse>
          <Divider variant="inset" />
        </li>
      ))}
    </>
  );
};
