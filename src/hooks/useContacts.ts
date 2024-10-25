import { useSelector } from 'react-redux';
import {
  errorContacts,
  selectContacts,
  selectLoading,
  selectStatus,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const status = useSelector(selectStatus);
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const contactsError = useSelector(errorContacts);

  return {
    status,
    isLoading,
    contacts,
    contactsError,
  };
};
