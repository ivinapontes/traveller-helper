import React, { Component } from "react";

class CurrencyTarget extends Component {
  render() {
    return (
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href=".com">
            Action
          </a>
          <a className="dropdown-item" href="hsshs.com">
            Another action
          </a>
          <a className="dropdown-item" href="ksksksks/cp,">
            Something else here
          </a>
        </div>
      </div>
    );
  }
}

export default CurrencyTarget;
