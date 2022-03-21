import axios from 'axios';
import { BASE_URL } from './contacts';

const _axios = axios.create({
  baseURL: BASE_URL,
});

const getContacts = () => _axios.get('contacts').then(res => res.data);

const addContacts = contact =>
  _axios.post('contacts', contact).then(res => res.data);

const deleteContacts = id =>
  _axios.delete(`contacts/${id}`).then(res => res.data.id);

const contactsAPI = { getContacts, addContacts, deleteContacts };

export default contactsAPI;
