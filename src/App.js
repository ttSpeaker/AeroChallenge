import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Products from "./components/Products";
import {ContextProvider, ContextConsumer} from "./context.js";
import Modal from "react-bootstrap4-modal";
import {Coins} from "./components/CoinsModal.js"
import {Redeem} from "./components/RedeemModal.js"

class App extends Component {
constructor() {
  super();
  this.state = {
    coinsModal: false,
    redeemModal: false,
    currentPurchase: null
  };

}
openCoinsModal = () => {
  this.setState({
    coinsModal:true
  })
}
closeCoinsModal = () => {
  this.setState({
    coinsModal:false
  })
}
openRedeemModal = (id) => {
  this.setState({
    redeemModal:true,
    currentPurchase: id
  })
}
closeRedeemModal = () => {
  this.setState({
    redeemModal:false
  })
}

  render() {
    return (
      <ContextProvider>
        <React.Fragment>
          <ContextConsumer>
            {value => {
            return (
              <React.Fragment>
                <Coins visible={this.state.coinsModal} closeCoinsModal={this.closeCoinsModal}/>
                <Redeem visible={this.state.redeemModal} closeRedeemModal={this.closeRedeemModal} id={this.state.currentPurchase}/>
                <Navbar openCoinsModal={this.openCoinsModal} reloadPoints={value.reloadPoints}/>
                <Head/>
                <Products openCoinsModal={this.openCoinsModal} openRedeemModal={this.openRedeemModal} reloadPoints={value.reloadPoints}/>
              </React.Fragment>
            );
            }}
          </ContextConsumer>
        </React.Fragment>
      </ContextProvider>
    );
  }
}

export default App;
