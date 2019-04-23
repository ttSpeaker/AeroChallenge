import React, { Component } from 'react';
import ProductsMenu from './ProductsMenu';
import ProductsList from './ProductsList';




export default class Products extends Component {

  render() {
  
    return (
      <div id="productsSection">
        <ProductsMenu ></ProductsMenu>
        <ProductsList ></ProductsList>
    </div> 
    ); 
  }
}


