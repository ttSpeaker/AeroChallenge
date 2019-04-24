import React, { Component } from 'react'
import arrowRight from "../icons/arrow-right.svg";
import arrowLeft from "../icons/arrow-left.svg";

export default class ProductsMenu extends Component {
  render() {
    return (
      <div className="filters align-items-center">
        <span className="pagingText">16 of 32 products</span>
        <ul className="nav nav-pills" id="filtersButtons">
          <li className="nav-item nav-text">Sort by:</li>
          <li className="nav-item "><span className="nav-link active ">Most recent</span></li>
          <li className="nav-item "><span className="nav-link">Lowest price</span></li>
          <li className="nav-item "><span className="nav-link">Highest price</span></li>
        </ul>
        <div className="ml-auto">
          <img className="Arrowleft" src={arrowLeft} width="48" height="48" alt="" />
          <img src={arrowRight} width="48" height="48" alt="" />
        </div>
      </div>
    )
  }
}
