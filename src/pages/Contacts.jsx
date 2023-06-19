import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Modal } from 'components/Modal/Modal';
import { SkeletonList } from 'components/SkeletonList/SkeletonList';
import { Toast } from 'components/Toast/Toast';
import { useContacts } from 'hooks/useContacts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();
  const { contactsError } = useContacts();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    contactsError && toast.error(contactsError);
  }, [contactsError]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? <SkeletonList /> : <ContactsList />}
      <ButtonAdd onOpen={handleOpen} />
      <Modal onOpen={open} onClose={handleClose}>
        <ContactForm onClose={handleClose} title="Add contact" />
      </Modal>
      <Toast />
    </>
  );
};

export default Contacts;
