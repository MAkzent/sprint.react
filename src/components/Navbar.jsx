import React, { Component } from "react";
import Upload from "./Upload";

import "../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <button
            className="homeButton"
            onClick={this.props.togglePhotoView}
            onKeyDown={this.props.togglePhotoView}
          >
            HOME
          </button>
        </div>
        <Upload />
      </div>
    );
  }
}
