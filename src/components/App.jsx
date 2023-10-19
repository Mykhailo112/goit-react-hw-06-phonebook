import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { MainDiv } from './App.styled.js';
import { GlobalStyle } from './GlobalStyle.js';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContact);

  return (
    <MainDiv>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <h1>
          There are no contacts in your phonebook. Please add your first
          contact!
        </h1>
      )}
    </MainDiv>
  );
};
