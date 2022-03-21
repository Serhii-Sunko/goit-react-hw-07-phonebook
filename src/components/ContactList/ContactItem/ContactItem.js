import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import ContactItemStyled from './ContactItemStyled';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const onDelete = () => dispatch(contactsOperations.deleteContacts(id));

  return (
    <ContactItemStyled>
      <span>
        {name}: {phone}
      </span>
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
