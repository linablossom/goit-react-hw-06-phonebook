import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import * as actions from "./redux/actions";

class App extends Component {
  // componentDidMount() {
  //   try {
  //     const savedContacts = localStorage.getItem("contacts");
  //     if (savedContacts) {
  //       this.setState({ contacts: JSON.parse(savedContacts) });
  //     }
  //   } catch (error) {}
  // }

  addContact = (name, number) => {
    const sameContact = this.props.contacts.find(
      (contact) => contact.name === name
    );
    if (sameContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact({ id: uuidv4(), name, number });

    // localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  deleteContact = (id) => {
    this.props.deleteContact(id);
    // localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  onFilter = (value) => {
    this.props.onFilter(value);
  };

  render() {
    const filterBy = this.props.filter.toLowerCase();
    const filteredArray = this.props.filter
      ? this.props.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterBy)
        )
      : this.props.contacts;

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} value={this.props.filter} />
        <ContactList
          contacts={filteredArray}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(actions.contactsAdd(contact)),
    deleteContact: (id) => dispatch(actions.contactsDelete(id)),
    onFilter: (value) => dispatch(actions.contactsFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
