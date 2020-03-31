/**
 * Slot Spinner - Game
 *
 * @category   Application_Frontend
 * @package    slot-spinner
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";
import Spinner from "./components/Spinner/Spinner";
import Footer from "./components/Layout/Footer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="content">
          <Spinner />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
