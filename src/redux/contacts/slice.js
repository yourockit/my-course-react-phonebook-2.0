import { createSlice } from '@reduxjs/toolkit';
import {
  editContact,
  addContact,
  deleteContact,
  fetchContacts,
} from './operations';
import { signOut } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editContact.pending, (state, action) => {
        state.error = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editContact.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
