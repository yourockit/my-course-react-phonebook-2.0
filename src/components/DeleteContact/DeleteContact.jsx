import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const DeleteContact = ({ id, name, onClose }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h7">Delete {name}</Typography>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={8}
        sx={{ mt: 3, mb: 2 }}
      >
        <Button type="submit" variant="text" onClick={handleDelete}>
          Delete
        </Button>
        <Button type="button" variant="text" onClick={() => onClose()}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};
