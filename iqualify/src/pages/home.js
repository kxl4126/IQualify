import React, { Component } from "react";
import scooter from "../assets/scooter.png";

export default class home extends Component {
  render() {
    return (
      <div>
        <img src={scooter} alt="oidf" class="scooter"></img>
        <div class="entry-button">
          <a href="#" class="button instagram">
            <span class="gradient"></span>See how much you could save
          </a>
        </div>
      </div>
    );
  }
}
