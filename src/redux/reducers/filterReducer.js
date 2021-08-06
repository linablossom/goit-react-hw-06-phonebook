import { contactsFilter } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = "";

const filterReducer = createReducer(initialState, {
  [contactsFilter]: (state, { payload }) => payload,
});

export default filterReducer;
