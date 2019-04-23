import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Products from "./components/Products";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "John Doe", // call for username()
      userPoints: 6000
    };
  }
  render() {
    return (
      <React.Fragment>
        <Navbar name={this.state.userName} points={this.state.userPoints} />
        <Head/>
        <Switch>
          <Route exact path="/" Component={Products} />
          {/* <Route Component={Default}></Route> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
