import { ButtonStyle } from 'components/App.styled';
import { ContactItemStyle } from './ContactItem.styled';


export const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <ContactItemStyle key={id}>
    <p>
      {name}: {number}
    </p>
    <ButtonStyle type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </ButtonStyle>
  </ContactItemStyle>
);


