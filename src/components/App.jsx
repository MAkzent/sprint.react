import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import "../styles/styles.css";
import AllPhotos from "./AllPhotos";
import { listObjects } from "../utils/index";
import { SinglePhoto } from "./SinglePhoto";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "all",
      photos: [],
      selectedPhoto: "",
    };
  }

  togglePhotoView = () => {
    if (this.state.currentView === "one") {
      this.setState({ currentView: "all" });
    }
  };

  componentDidMount() {
    console.log(this);
    listObjects().then((photos) => {
      this.setState({ photos });
    });
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
        <Navbar togglePhotoView={this.togglePhotoView} />
        {this.state.currentView === "all" ? (
          <AllPhotos
            photos={this.state.photos}
            onSinglePhotoClick={this.onSinglePhotoClick}
          />
        ) : (
          <SinglePhoto selected={this.state.selectedPhoto} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
