/**
 * Slot Spinner - Game
 *
 * @category   Application_Frontend
 * @package    slot-spinner
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React from "react";

const PlayerCredits = ({ credits }) => {
  // return player credits
  return (
    <div className="col-12 col-lg-6 col-lx-6">
      <div className="credit-display">{credits}</div>
    </div>
  );
};

export default PlayerCredits;
