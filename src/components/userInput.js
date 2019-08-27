import React, { Component } from "react";

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
        <h3>to </h3>
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
        <button type="button" className="btn btn-secondary btn-lg">
          Large button
        </button>
      </form>
    );
  }
}

export default UserInput;
