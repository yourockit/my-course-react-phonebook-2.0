import { useSelector } from 'react-redux';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  return {
    isLoading,
    contacts,
  };
};
