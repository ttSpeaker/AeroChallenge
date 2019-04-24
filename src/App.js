import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Products from "./components/Products";
import {ContextProvider} from "./context.js";

class App extends Component {

  render() {
    return (
      <ContextProvider>
        <React.Fragment>
          <Navbar/>
          <Head/>
          {/* <Switch>
            <Route path="/" Component={Products} />
          </Switch> */}
          <Products/>
        </React.Fragment>
      </ContextProvider>
    );
  }
}

export default App;
