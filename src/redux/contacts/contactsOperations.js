import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from 'api';

const getContacts = createAsyncThunk('contacts/get', async () => {
  const contacts = await contactsAPI.getContacts();
  return contacts;
});

const addContacts = createAsyncThunk('contacts/add', async contact => {
  const { name } = contact;

  const contacts = await contactsAPI.getContacts();
  if (contacts.filter(item => item.name === name).length > 0) {
    alert(`${name} is already in contacts`);
    throw Error('Exists');
  }

  const addedContact = await contactsAPI.addContacts(contact);

  return addedContact;
});

const deleteContacts = createAsyncThunk('contacts/delete', async contactId => {
  const id = await contactsAPI.deleteContacts(contactId);
  return id;
});

const operations = { getContacts, addContacts, deleteContacts };

export default operations;
