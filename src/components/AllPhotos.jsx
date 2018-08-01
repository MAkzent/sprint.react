import React, { Component } from "react";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="all__photos">
        {this.props.photos.map((photo) => {
          return (
            <div className="imageCell" onClick={this.props.onSinglePhotoClick.bind(null, photo.Key)}>
              <img
                className="image"
                src={"https://react.sprint.s3.amazonaws.com/" + photo.Key}
              />
            </div>
          );
        })}
        {/* {console.log(this.props.photos)} */}
      </div>
    );
  }
}
