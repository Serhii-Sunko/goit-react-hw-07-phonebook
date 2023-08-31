import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import ContactItemStyled from './ContactItemStyled';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const FilterItems = () => {
    return items.filter(item => item.name.toLowerCase().includes(nameFilter));
  };

  let contacts = nameFilter === '' ? items : FilterItems();

  return (
    <div>
      {contacts.length === 0 ? null : (
        <>
          <ul>
            {contacts.map(contact => {
              return (
                <ContactItemStyled key={contact.id}>
                  <span>
                    {contact.name}:{contact.number}
                  </span>
                  <button
                    onClick={() => {
                      deleteContacts(contact.id);
                    }}
                    type="button"
                  >
                    Delete
                  </button>
                </ContactItemStyled>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
