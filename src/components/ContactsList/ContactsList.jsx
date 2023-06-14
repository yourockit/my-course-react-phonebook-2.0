import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
