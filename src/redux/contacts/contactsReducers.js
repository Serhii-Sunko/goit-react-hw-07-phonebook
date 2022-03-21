import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';
import contactOperations from './contactsOperations';

const itemsReducer = createReducer([], {
  [contactOperations.getContacts.fulfilled]: (_, { payload }) => payload,

  [contactOperations.addContacts.fulfilled]: (items, { payload }) => [
    ...items,
    payload,
  ],

  [contactOperations.deleteContacts.fulfilled]: (items, { payload }) => [
    ...items.filter(item => item.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
