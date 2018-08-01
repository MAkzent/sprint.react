import React, { Component } from "react";
import _ from "lodash";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.photos.map((photo) => {
          
          return <img src={"https://react.sprint.s3.amazonaws.com/"+photo.Key} />;
        })}
        {/* {console.log(this.props.photos)} */}
      </div>
    );
  }
}
