import React, { Component } from 'react'
import arrowRight from "../icons/arrow-right.svg";
import arrowLeft from "../icons/arrow-left.svg";
import {ContextConsumer} from "../context.js"
export default class ProductsMenu extends Component {
  
  render() {
    return (
      <ContextConsumer>
      {value => { return (
      <div className="filters align-items-center">
        <span className="pagingText">{value.itemsPage*(value.pageNum+1)} of {value.items.length} products</span>
        <ul className="nav nav-pills" id="filtersButtons">
          <li className="nav-item nav-text">Sort by:</li>
          <li onClick={()=>value.updateOrder("_id")} className="nav-item "><span className={value.orderBy==='_id'? "nav-link active": "nav-link"}>Most recent</span></li>
          <li onClick={()=>value.updateOrder("lowCost")}className="nav-item "><span className={value.orderBy==='lowCost'? "nav-link active": "nav-link"}>Lowest price</span></li>
          <li onClick={()=>value.updateOrder("hiCost")} className="nav-item "><span className={value.orderBy==='hiCost'? "nav-link active": "nav-link"}>Highest price</span></li>
        </ul>
        <div className="ml-auto">
          {value.pageNum>0 ? <img onClick={()=>value.changePage(-1)} className="Arrowleft" src={arrowLeft} width="48" height="48" alt="" />:""}
          {(value.pageNum+1)*value.itemsPage < value.items.length ? <img onClick={()=>value.changePage(1)} className="Arrowright" src={arrowRight} width="48" height="48" alt="" />:""}
        </div>
      </div>
    )}}</ContextConsumer>)
  }
}
