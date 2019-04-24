import React, { Component } from 'react';
import ProductsMenu from './ProductsMenu';
import ProductsList from './ProductsList';
import ProductsBotMenu from './ProductsBotMenu';



export default class Products extends Component {

  render() {
  
    return (
      <div id="productsSection">
        <ProductsMenu ></ProductsMenu>
        <ProductsList ></ProductsList>
        <ProductsBotMenu></ProductsBotMenu>
    </div> 
    ); 
  }
}


