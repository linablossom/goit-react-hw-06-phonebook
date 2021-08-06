import { CONTACTS_FILTER } from "../actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const contactsFilter = createAction(CONTACTS_FILTER);

// export const contactsFilter = (value) => ({
//   type: CONTACTS_FILTER,
//   payload: value,
// });
