import React from "react";
import PropTypes from "prop-types";
import { contactsFilter } from "../redux/actions";
import { connect } from "react-redux";

const Filter = ({ onFilter, value }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="keyword"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (value) => dispatch(contactsFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
