import React, { Component } from "react";
import Banner from "../assets/header-x2.png";
export default class Head extends Component {
  render() {
    return (
      <div className="">
        <img src={Banner} className="img-fluid" alt="Section Banner" />
        <h2 className="text-over-img">Electronics</h2>
      </div>
    );
  }
}
