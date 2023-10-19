import { useMemo } from 'react';
import { Ul, Li, Button } from './ContactList.styled.js';
import { CgTrash } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filtersSlice.js';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContact = useMemo(
    () => () => {
      const normalizedFilter = filterValue.toLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
    [contacts, filterValue]
  );

  const filteredContact = getFilteredContact();

  return (
    <Ul>
      {filteredContact.map(({ id, name, number }) => (
        <Li key={id}>
          {name + ':' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact({ id: id }))}
            >
              <CgTrash size={20} />
            </Button>
          }
        </Li>
      ))}
    </Ul>
  );
};
