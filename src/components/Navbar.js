import React, { Component } from "react";

import logo from "../aerolab-logo.svg";
import coin from "../icons/coin.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" alt="" />
        </a>
        <ul className="navbar-nav align-items-center  ml-auto">
          <li>
            <span className="navbar-text" id="userName">{this.props.userName}</span>
          </li>
          <li>
            <button className="customButton btn align-items-center" type="button">
            <span className="buttonText">{this.props.userPoints}</span><img src={coin} width="30" height="30" alt="" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
