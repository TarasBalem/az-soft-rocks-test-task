import {createSlice} from "@reduxjs/toolkit";
import {contacts} from "DB.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: contacts,
    error: null,
  },
  reducers: {
    getContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.push({...action.payload});
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex(c => c.id === action.payload.id);
      state.contacts[index] = action.payload;
    },
    removeContact: (state, action) => {
      const index = state.contacts.findIndex(c => c.id === action.payload.id);
      state.contacts.splice(index, 1);
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const {getContacts, addContact, updateContact, removeContact, onError} =
  slice.actions;
