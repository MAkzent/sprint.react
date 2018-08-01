import React, { Component } from "react";
import Upload from "./Upload";
const _ = require("lodash");

import "../styles/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Upload />
      </div>
    )
  }
}
