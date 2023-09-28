import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListStyle } from '../ContactList/ContactList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ContactListStyle>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        id={contact.id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ContactListStyle>
);


