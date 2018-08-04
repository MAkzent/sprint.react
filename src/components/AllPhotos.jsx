import React, { Component } from "react";

export default class AllPhotos extends Component {
  render() {
    return (
      <div className="all__photos">
        {this.props.photos.map((photo) => {
          if (photo !== "attack-boo-courage-10qHa9JgyXYcw0.html") {
            return (
              <div
                className="imageCell"
                key={photo}
                onClick={() => this.props.onSinglePhotoClick(photo)}
                onKeyDown={() => this.props.onSinglePhotoClick(photo)}
                role="imageCell"
              >
                <img
                  className="image"
                  src={`http://react.sprint.s3.amazonaws.com/${photo}`}
                  alt={photo}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

// onClick={this.props.onSinglePhotoClick.bind(null, photo.Key)
