import React, { Component } from "react";

class CurrencyToBeConverted extends Component {
  constructor() {
    super();
    this.state = {
      currency: []
    };
  }
  componentWillMount() {
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
      return getting.map(x => <a href={this.state.currency}> {x}</a>);
    } else {
      return "heyhp";
    }
  }
}

export default CurrencyToBeConverted;
