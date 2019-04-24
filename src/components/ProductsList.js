import React, { Component } from "react";
import ProductBox from "./ProductBox";
import {ContextConsumer} from "../context.js";

export default class ProductsList extends Component {

  
  render() {
   return (
   <ContextConsumer>
      {value => {
          if (value.error) {    
            return <div>Error: {value.error.message}</div>;
            } else if (!value.isProductsLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
            <div >
              <ul className="d-flex justify-content-between flex-wrap"> 
              {value.items.slice(value.pageNum*value.itemsPage,value.itemsPage*(value.pageNum+1)).map(item => (
              <ProductBox key={item._id} item={item} userPoints={value.userPoints} openCoinsModal={this.props.openCoinsModal}></ProductBox>
              ))}
              </ul>
            </div>
          );
          }
      }}
    </ContextConsumer>);
 }
}
