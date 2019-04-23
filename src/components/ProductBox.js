import React, { Component } from "react";

export default class ProductBox extends Component {
  render() {
    return (
        <div >
            <ul className="d-flex justify-content-between flex-wrap"> 
            {this.props.items.map(item => (
            <li key={item._id}>
                <div className="card" >
                    <img className="card-img-top" src={item.img.url} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text"> {item.name} </p>
                    </div>
                </div>
            </li>))}            
          </ul> 
        </div>
        );
    }
}