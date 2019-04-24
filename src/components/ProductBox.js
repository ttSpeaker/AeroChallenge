import React, { Component } from "react";
import blueBuy from "../icons/buy-blue.svg";
import whiteBuy from "../icons/buy-white.svg";
import NotEnoughPoints from "./NotEnoughPoints";


export default class ProductBox extends Component {
  render() {
      
    return (
            <li>
                <div className="card" >
                <div className="imgContainer">
                    {this.props.item.cost > this.props.userPoints ? 
                         <NotEnoughPoints cost={this.props.item.cost} userPoints={this.props.userPoints} openCoinsModal={this.props.openCoinsModal}> 
                         </NotEnoughPoints>:
                         <img src={blueBuy} width="42" height="42" alt="" className="buyImg"/>}
                    <img className="card-img-top" src={this.props.item.img.url} alt="Card image cap"/>
                </div>
                    <div className="card-body">
                        <p className="card-text category"> {this.props.item.category} </p>
                        <p className="card-text name"> {this.props.item.name} </p>
                    </div>
                </div>
            </li>
            );}            
}