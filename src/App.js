import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Products from "./components/Products";
import {ContextProvider} from "./context.js";
import Modal from "react-bootstrap4-modal";
import {Coins} from "./components/CoinsModal.js"

class App extends Component {
constructor() {
  super();
  this.state = {
    coinsModal: false,
    buyModal: false
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


  render() {
    return (
      <ContextProvider>
        <React.Fragment>
          <Coins visible={this.state.coinsModal} closeCoinsModal={this.closeCoinsModal}/>
          <Navbar openCoinsModal={this.openCoinsModal} />
          <Head/>
          {/* <Switch>
            <Route path="/products" Component={Products} />
          </Switch>  */}
          <Products openCoinsModal={this.openCoinsModal}/>
        </React.Fragment>
      </ContextProvider>
    );
  }
}

export default App;
