import React from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Section from './section/Section';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ToastContainer />
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />

        <ContactList />
      </Section>
    </>
  );
};

export default App;
