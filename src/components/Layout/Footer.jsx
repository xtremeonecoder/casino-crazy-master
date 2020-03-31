/**
 * Slot Spinner - Game
 *
 * @category   Application_Frontend
 * @package    slot-spinner
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React from "react";

const Footer = () => {
  // get current year
  const dataObj = new Date();
  const currentYear = dataObj.getFullYear();

  // render game copyright text
  return (
    <div className="row">
      <div className="col colophon d-flex justify-content-center">
        Copyright &copy; {currentYear}&nbsp;
        <a
          href="https://www.linkedin.com/in/xtreme1coder/"
          rel="noopener noreferrer"
          target="_blank"
        >
          XtremeOneCoder
        </a>
        . Designed and developed by&nbsp;
        <a
          href="https://github.com/xtremeonecoder"
          rel="noopener noreferrer"
          target="_blank"
        >
          Suman Barua
        </a>
        . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
