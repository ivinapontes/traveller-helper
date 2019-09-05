import React, { Component } from "react";
import CurrencyToBeConverted from "./CurrencyToBeConverted";
import CurrencyTarget from "./CurrencyTarget";
import ConvertBtn from "./ConvertBtn";

class UserInput extends Component {
  render() {
    return (
      <form className="form-inline">
        <label
          for="colFormLabelLg"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          Value
        </label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Value"
        />

        <CurrencyToBeConverted />
        <h3>to </h3>
        <CurrencyTarget />
        <ConvertBtn />
      </form>
    );
  }
}

export default UserInput;
