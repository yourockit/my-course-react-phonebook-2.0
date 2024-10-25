export const selectContacts = state => state.contacts.items;
export const selectStatus = state => state.contacts.status;
export const selectLoading = state => state.contacts.isLoading;
export const errorContacts = state => state.contacts.error;
