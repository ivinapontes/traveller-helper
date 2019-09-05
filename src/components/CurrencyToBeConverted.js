import React, { Component } from "react";

class CurrencyToBeConverted extends Component {
  constructor() {
    super();
    this.state = {
      currency: ['hello']
    };
  }
  componentDidMount() {
    fetch(
      `https://free.currconv.com/api/v7/currencies?apiKey=aeb9658f5350c2c7473d`
    )
      .then(res => res.json())

      .then(data => {
        this.setState({
          currency: data.results
        });
        // var datas = data.results.map(x => x )
        console.log(data)
    });
  }
  render() {
    // console.log("this is deee", data);
    return (
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          // aria-expanded="true"
        ></a>

        {this.state.currency}
      </div>
    );
  }
}

export default CurrencyToBeConverted;
