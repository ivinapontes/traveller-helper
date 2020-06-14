import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
class CurrencyToBeConverted extends Component {
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
    
    if (currencies) {
      
      return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select country
          </Dropdown.Toggle>

          <Dropdown.Menu variant="success" id="dropdown-basic" onClick={console.log(this.state.currency)}>
            {currencies.map(x => (
              <Dropdown.Item href="#/action-1">{x}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
         
          </Dropdown>
     
      );
    } else {
      return "heyhp";
    }
  }
}

export default CurrencyToBeConverted;
