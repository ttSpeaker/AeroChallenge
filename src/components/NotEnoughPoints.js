import React, { Component } from "react";
import coin from "../icons/coin.svg";
import {ContextConsumer} from "../context.js"

export default class NotEnoughPoints extends Component {
  render() {

    return (
        <ContextConsumer>
            {value=>
            <button onClick={(e)=>value.reloadPoints(e)} className="btn align-items-center needButton" type="button">
            <span className="needText"> 
            <span>You need {(this.props.cost-this.props.userPoints)}</span>
            </span><img src={coin} width="20" height="" alt="" />
            </button>
            }
         </ContextConsumer>
            );}            
}