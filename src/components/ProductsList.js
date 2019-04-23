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
            <ProductBox items={value.items}></ProductBox>
          );
        }
      }}
    </ContextConsumer>);
 }
}
