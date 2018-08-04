import React, { Component } from "react";
import "../styles/styles.css";
import SinglePhotoLink from "../containers/SinglePhotoLink";
import AllPhotosLink from "../containers/AllPhotosLink";
import NavbarLink from "../containers/NavbarLink";

// WIP -> still refactoring from the pure react version.

export default class App extends Component {
  // getting all photos and pushing them into the store.
  componentDidMount() {
    this.props.storePhotos();
  }

  render() {
    return (
      <div className="app">
        <NavbarLink />
        {this.props.currentView === "all" ? (
          <AllPhotosLink onSinglePhotoClick={this.onSinglePhotoClick} />
        ) : (
          <SinglePhotoLink />
        )}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
