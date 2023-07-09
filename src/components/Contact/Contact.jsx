import {
  Avatar,
  Box,
  Collapse,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
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
        <Grid item component="li" key={id} xs={4} sm={1} md={3}>
          <Paper
            sx={{
              width: { sm: 'calc((100vw - 96px) / 4)', md: 'auto' },
              borderRadius: 6,
            }}
          >
            <ListItemButton
              onClick={() => handleClick(id)}
              sx={{
                flexDirection: { sm: 'column' },
                width: '100%',
                borderRadius: 'inherit',
                p: 2,
                zIndex: 1,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mr: { xs: 2, sm: 0 },
                  }}
                >
                  {name[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ textAlign: { sm: 'center' } }}
                primary={name}
                secondary={number}
              ></ListItemText>
            </ListItemButton>
            <Collapse
              in={selectedContact === id}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <ContactDetails number={number} name={name} id={id} />
            </Collapse>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ContactDetails number={number} name={name} id={id} />
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  );
};
