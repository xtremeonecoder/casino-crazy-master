/**
 * Slot Spinner - Game
 *
 * @category   Application_Frontend
 * @package    slot-spinner
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";
import Sounds from "../Sounds/Sounds";

class PlayerBet extends Component {
  // state = {};

  // handle mouser over
  handleMouseOver = () => {
    // play clicking sound
    Sounds.clicking().play();
  };

  render() {
    // get props data
    const { playerBet, onClick } = this.props;

    // render player bets widget
    return (
      <div className="col-12 col-lg-3 col-lx-3">
        <div className="row">
          <div className="col-7 col-lg-12 px-0 mb-lg-2">
            <div className="bet-display">{playerBet}</div>
          </div>
          <div className="col-5 col-lg-12 px-0 d-flex justify-content-lg-center">
            <button
              onMouseOver={this.handleMouseOver}
              onClick={() => onClick(0)}
              id="bet-one"
              className="mr-sm-3"
            >
              &nbsp;
            </button>
            <button
              onMouseOver={this.handleMouseOver}
              onClick={() => onClick(1)}
              id="bet-max"
            >
              &nbsp;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerBet;
