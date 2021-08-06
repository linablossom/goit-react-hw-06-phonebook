// import { CONTACTS_FILTER, CONTACTS_DELETE, CONTACTS_ADD } from "../actionTypes";
import { contactsAdd, contactsDelete } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsReducer = createReducer(initialState, {
  [contactsAdd]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [contactsDelete]: (state, { payload }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== payload),
  }),
});

// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CONTACTS_ADD:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case CONTACTS_DELETE:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case CONTACTS_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default contactsReducer;
