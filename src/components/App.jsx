import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import "../styles/styles.css";
import AllPhotos from "./AllPhotos";
import { listObjects } from "../utils/index";
// import SinglePhoto from "./SinglePhoto";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "",
      photos: [],
      selectedPhoto: "",
    };
  }

  componentDidMount() {
    listObjects().then((photos) => {
      this.setState({ photos: photos});
    })
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <AllPhotos photos={this.state.photos} />
        {/* <SinglePhoto /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
