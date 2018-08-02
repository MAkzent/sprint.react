import React, { Component } from "react";
import { saveObject } from "../utils/index";

import "../styles/upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
  }

  triggerFileUpload = () => {
    this.fileUpload.current.click();
  };

  handleUploadFile = () => {
    const file = this.fileUpload.current.files[0];
    saveObject(file);
  };

  render() {
    return (
      <div className="file-upload">
        <input
          type="file"
          ref={this.fileUpload}
          onChange={this.handleUploadFile}
        />
        <button onClick={this.triggerFileUpload}>Upload Image</button>
      </div>
    );
  }
}
