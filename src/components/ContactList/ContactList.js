import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const items = useSelector(contactsSelectors.getFilteredItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <ul>
      {items.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};

export default ContactList;
