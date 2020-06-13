import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
class CurrencyToBeConverted extends Component {
  state = {
    currency: []
  };

  componentDidMount() {
    fetch(
      `https://free.currconv.com/api/v7/currencies?apiKey=aeb9658f5350c2c7473d`
    )
      .then(res => res.json())

      .then(data => {
        this.setState({
          currency: Object.keys(data.results)
        });
        // var datas = data.results.map(x => x )
        // console.log(data);
        // console.log(Object.keys(data.results));
      });
  }

  render() {
    let getting = this.state.currency;
    if (getting) {
      console.log(getting);
      return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select country
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {getting.map(x => (
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
