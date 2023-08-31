import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      Loading.pulse();
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      Loading.remove();
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      Loading.remove();
    },
    [addContact.pending]: state => {
      Loading.pulse();
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      Loading.remove();
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      Loading.remove();
    },
    [deleteContact.pending]: state => {
      Loading.pulse();
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      Loading.remove();
    },
    [deleteContact.rejected]: (state, { payload }) => {
      Loading.remove();
      state.error = payload;
    },
    [updateContact.pending]: state => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(el => el.id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const { changeFilter } = contactsSlice.actions;

export const itemsReducer = contactsSlice.reducer;

Loading.init({
  svgSize: '300px',
  svgColor: 'grey',
});
