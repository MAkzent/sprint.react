import React, { Component } from "react";
import Navbar from "../containers/NavbarLink";
import "../styles/styles.css";
import { SinglePhoto } from "./SinglePhoto";
import { getAWSImages } from "../index";
import AllPhotosLink from "../containers/AllPhotosLink";

// WIP -> still refactoring from the pure react version.

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: "",
    };
  }
  // getting all photos and pushing them into the store.
  componentDidMount() {
    this.props.storePhotos;
  }

  onSinglePhotoClick = (photo) => {
    // this.selectedPhoto = currentSelectedPhoto
    this.setState({ selectedPhoto: photo });
    // currentView = "one"
    this.setState({ currentView: "one" });
  };

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.props.currentView === "all" ? (
          <AllPhotosLink onSinglePhotoClick={this.onSinglePhotoClick} />
        ) : (
          <SinglePhoto selected={this.state.selectedPhoto} />
        )}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
