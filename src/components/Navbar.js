import React, { Component } from "react";

import logo from "../aerolab-logo.svg";
import coin from "../icons/coin.svg";
import {ContextConsumer} from "../context.js";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt="" />
          </a>
          <ul className="navbar-nav align-items-center ml-auto">
            <li>

              <span className="navbar-text" id="userName">{
                <ContextConsumer>
                  { value => {
                     return <span>{value.userName}</span>;
                    }}
                </ContextConsumer>
              }</span>
            </li>
            <li>
              <button className="customButton btn align-items-center" type="button">
              <span className="buttonText"> 
                <ContextConsumer>
                  { value => {
                     return <span>{value.userPoints}</span>;
                    }}
                </ContextConsumer>
              </span><img src={coin} width="30" height="30" alt="" />
              </button>
            </li>
          </ul>
        </nav>
    );
  }
}
