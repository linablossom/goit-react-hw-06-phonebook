import { CONTACTS_ADD, CONTACTS_DELETE, CONTACTS_FILTER } from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const contactsAdd = createAction(CONTACTS_ADD);

// export const contactsAdd = (contact) => ({
//   type: CONTACTS_ADD,
//   payload: contact,
// });

export const contactsDelete = createAction(CONTACTS_DELETE);

// export const contactsDelete = (id) => ({
//   type: CONTACTS_DELETE,
//   payload: id,
// });

export const contactsFilter = createAction(CONTACTS_FILTER);

// export const contactsFilter = (value) => ({
//   type: CONTACTS_FILTER,
//   payload: value,
// });
