import { CONTACTS_ADD, CONTACTS_DELETE, CONTACTS_FILTER } from "./actionTypes";

export const contactsAdd = (contact) => ({
  type: CONTACTS_ADD,
  payload: contact,
});

export const contactsDelete = (id) => ({
  type: CONTACTS_DELETE,
  payload: id,
});

export const contactsFilter = (value) => ({
  type: CONTACTS_FILTER,
  payload: value,
});
