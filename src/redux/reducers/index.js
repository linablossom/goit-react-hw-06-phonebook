import { combineReducers } from "redux";
import contacts from "./contactsReducer";
import filter from "./filterReducer";

export default combineReducers({ contacts, filter });
