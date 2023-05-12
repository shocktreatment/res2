import { createSlice } from "@reduxjs/toolkit";

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from "../auth/auth-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (store) => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchAllContacts.fulfilled, (store, action) => {
        store.isLoading = true;
        store.items = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (store, action) => {
        store.isLoading = true;
        store.error = action.payload;
      })
      .addCase(fetchAddContact.pending, (store) => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchAddContact.fulfilled, (store, action) => {
        store.isLoading = true;
        store.items.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, (store, action) => {
        store.isLoading = true;
        store.error = action.payload;
      })
      .addCase(fetchDeleteContact.pending, (store) => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, action) => {
        store.isLoading = true;
        const index = store.items.findIndex(
          (item) => item.id === action.payload
        );
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, action) => {
        store.isLoading = true;
        store.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
