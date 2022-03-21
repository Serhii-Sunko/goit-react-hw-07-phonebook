import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Container from './Container/Container';

const App = () => {
  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <ContactFilter />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
