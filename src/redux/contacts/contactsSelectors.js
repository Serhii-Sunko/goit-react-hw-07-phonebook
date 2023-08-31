const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getIsLoading = state => state.users.isLoading;
const getError = state => state.users.error;

export { getFilter, getContacts, getIsLoading, getError };
