import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';
import FilterStyled from './FilterStyled';
import { nanoid } from '@reduxjs/toolkit';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value.toLocaleLowerCase()));
  };

  const filterId = nanoid();
  return (
    <FilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
        placeholder="Find contact by name"
      />
    </FilterStyled>
  );
};

export default Filter;
