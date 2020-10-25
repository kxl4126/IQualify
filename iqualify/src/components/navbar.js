import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav float-right">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About Us <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
