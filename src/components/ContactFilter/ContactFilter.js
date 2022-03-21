import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsActions } from 'redux/contacts';
import { v4 as uuid } from 'uuid';
import ContactFilterStyled from './ContactFilterStyled';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const onChange = ({ target }) => {
    const { value } = target;
    dispatch(contactsActions.changeFilter(value));
  };

  const filterId = uuid();
  return (
    <ContactFilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={filter}
        onChange={onChange}
        name="filter"
      />
    </ContactFilterStyled>
  );
};

export default ContactFilter;
