import React, { Component } from "react";
import blueBuy from "../icons/buy-blue.svg";
import whiteBuy from "../icons/buy-white.svg";


export default class ProductBox extends Component {
  render() {
    return (
        <div >
            <ul className="d-flex justify-content-between flex-wrap"> 
            {this.props.items.map(item => (
            <li key={item._id}>
                <div className="card" >
                <div className="imgContainer">
                    <img src={blueBuy} width="42" height="42" alt="" className="buyImg"/>
                    <img className="card-img-top" src={item.img.url} alt="Card image cap"/>
                </div>
                    <div className="card-body">
                        <p className="card-text category"> {item.category} </p>
                        <p className="card-text name"> {item.name} </p>
                    </div>
                </div>
            </li>))}            
          </ul> 
        </div>
        );
    }
}