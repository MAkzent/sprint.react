import React, { Component } from "react";
import Upload from "./Upload";

import "../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <span onClick={this.props.togglePhotoView}>HOME</span>
        </div>
        <Upload uploadedImage={this.getUploadedImage} />
      </div>
    );
  }
}
