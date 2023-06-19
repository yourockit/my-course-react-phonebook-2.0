import { useSelector } from 'react-redux';
import {
  errorContacts,
  selectContacts,
  selectLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const contactsError = useSelector(errorContacts);

  return {
    isLoading,
    contacts,
    contactsError,
  };
};
