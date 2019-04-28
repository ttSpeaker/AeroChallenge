import React, { Component } from "react";
import blueBuy from "../icons/buy-blue.svg";
import whiteBuy from "../icons/buy-white.svg";
import NotEnoughPoints from "./NotEnoughPoints";
import coin from "../icons/coin.svg";


export default class ProductBox extends Component {
  render() {
      
    return (
            <li className ="product-container">
                
                <div className="card">
                    <div className="imgContainer">
                        {this.props.item.cost > this.props.userPoints ? 
                            <NotEnoughPoints cost={this.props.item.cost} userPoints={this.props.userPoints} openCoinsModal={this.props.openCoinsModal}> 
                            </NotEnoughPoints>:
                            <img src={blueBuy} width="42" height="42" alt="" className="buyImg" data-toggle="modal" data-target="#exampleModalCenter"/>}
                        <img className="card-img-top" src={this.props.item.img.url} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <p className="card-text category"> {this.props.item.category} </p>
                        <p className="card-text name"> {this.props.item.name} </p>
                    </div>
                </div>
                {this.props.item.cost < this.props.userPoints ? 
                <div className="hover-card" >
                    <img src={whiteBuy} width="42" height="42" alt="" className="buyImg white-buyImg" data-toggle="modal" data-target="#exampleModalCenter"/>
                    <div className="hover-bg-cian" >
                        <span className="hover-text">{this.props.item.cost}  <img src={coin} width="30" height="30" alt=""/></span>
                        <button className="btn redeem-btn" type="button" data-toggle="modal" data-target="#exampleModalCenter">
                            <span>Redeem now</span>
                        </button>
                    </div>
                </div> : <div className="hover-card" >
                    <div className="hover-bg-grey" >
                        <span className="hover-text">{this.props.item.cost}  <img src={coin} width="30" height="30" alt=""/></span>
                        <button className="btn redeem-btn" onClick={(event)=>this.props.openCoinsModal(event)} type="button" data-toggle="modal" data-target="#exampleModalCenter">
                            <span>Get more coins now</span>
                        </button>
                    </div>
                </div>}
            </li>
            );}            
}