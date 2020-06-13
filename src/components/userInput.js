import React, { Component } from "react";
import CurrencyToBeConverted from "./CurrencyToBeConverted";
import CurrencyTarget from "./CurrencyTarget";
import ConvertBtn from "./ConvertBtn";

import { FormControl, InputGroup, Spinner, Dropdown } from "react-bootstrap";
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello"
    };
  }

  componentDidMount() {
    this.setState({
      value: 55
    });
  }

  render() {
    return (
      <div>
        Count: {this.state.value}
        {/* <Spinner animation="border" variant="warning" /> */}
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <CurrencyToBeConverted />
        <h3> to </h3>
        <CurrencyTarget />
        <ConvertBtn />
      </div>
    );
  }
}

export default UserInput;

