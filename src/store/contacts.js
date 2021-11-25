import {createSlice} from "@reduxjs/toolkit";
import {contacts} from "DB.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: contacts,
    error: null,
  },
  reducers: {
    contactsReceived: (state, action) => {
      state.contacts = action.payload;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const {contactsReceived, onError} = slice.actions;

// Запит на контакти
// export const getContacts = () => async dispatch => {
//   try {
//     const _contacts = contacts;
//     dispatch(contactsReceived(_contacts));
//   } catch (err) {
//     dispatch(onError(err));
//     throw err;
//   }
// };
