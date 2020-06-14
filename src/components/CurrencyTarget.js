import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

class CurrencyTarget extends Component {
  state = {
    currency: []
  };

  componentDidMount() {
    fetch(`https://api.frankfurter.app/currencies`)
      .then(res => res.json())

      .then(res => {
        this.setState({
          currency: Object.keys(res)
        });
      })
  }


  render() {
    let currencies = this.state.currency;
    console.log(this.state.currency.base)
    let newCur;

    if (currencies) {

      return (
        <Dropdown>
         

  
          <Dropdown.Menu variant="success" id="dropdown-basic" onClick={this.setState.newCur}>
            {currencies.map(x => (
              <Dropdown.Item href="#/action-1">{x}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {newCur}
          </Dropdown.Toggle>
        </Dropdown>

      );
    } else {
      return "heyhp";
    }
  }
}

export default CurrencyTarget;
