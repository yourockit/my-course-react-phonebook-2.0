import { Box, Stack, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { DeleteContact } from 'components/DeleteContact/DeleteContact';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const ContactDetails = ({ number, id, name }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState('');
  const handleOpen = modal => {
    modal === openModal && setOpenModal('');
    setOpenModal(modal);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ p: 2, pt: 0 }}>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={0}
        sx={{ mt: 1, pr: 4 }}
      >
        <Fab
          variant="contained"
          color="primary"
          aria-label="edit"
          size="medium"
          onClick={() => handleOpen('edit')}
        >
          <EditIcon />
        </Fab>
        <Fab
          variant="contained"
          color="primary"
          aria-label="delete"
          size="medium"
          onClick={() => handleOpen('delete')}
        >
          <DeleteOutlineIcon />
        </Fab>
      </Stack>
      {openModal === 'edit' && (
        <Modal onOpen={open} onClose={handleClose}>
          <ContactForm
            id={id}
            name={name}
            number={number}
            title={`Edit ${name}`}
            onClose={handleClose}
          />
        </Modal>
      )}{' '}
      {openModal === 'delete' && (
        <Modal onOpen={open} onClose={handleClose}>
          <DeleteContact id={id} name={name} onClose={handleClose} />
        </Modal>
      )}
    </Box>
  );
};
