import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { contactsAdd } from "../redux/actions";
import { connect } from "react-redux";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onAddContact = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const sameContact = this.props.contacts.find(
      (contact) => contact.name === name
    );

    if (sameContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact({ id: uuidv4(), name, number });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.onAddContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactsAdd(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
