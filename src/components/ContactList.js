import React from "react";
import PropTypes from "prop-types";
import { contactsDelete } from "../redux/actions";
import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, deleteContact, filter }) => {
  const filterBy = filter.toLowerCase();
  const filteredArray = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterBy)
      )
    : contacts;
  return (
    <ul>
      {filteredArray.map((contact) => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(contactsDelete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
