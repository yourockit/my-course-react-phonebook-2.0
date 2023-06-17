import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Modal } from 'components/Modal/Modal';
import { Toast } from 'components/Toast/Toast';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactsList />
      <ButtonAdd onOpen={handleOpen} />
      <Modal onOpen={open} onClose={handleClose}>
        <ContactForm onClose={handleClose} title="Add contact" />
      </Modal>
      <Toast />
    </>
  );
};

export default Contacts;
