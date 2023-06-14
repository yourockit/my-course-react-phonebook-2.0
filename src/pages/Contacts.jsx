import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactsList />
      <ButtonAdd />
    </>
  );
};

export default Contacts;
