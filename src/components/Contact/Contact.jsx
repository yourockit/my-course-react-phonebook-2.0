// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/operations';

import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

export const Contact = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ListItemAvatar>
        <Avatar>{name[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={number}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {name}
            </Typography>
          </>
        }
      />
    </>
  );
};

{
  /* <button type="button" onClick={handleDelete}>
        Delete
      </button>  */
}
