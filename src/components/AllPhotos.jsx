import React, { Component } from "react";

export default class AllPhotos extends Component {
  render() {
    return (
      <div className="all__photos">
       {/* this console.log returns an empty array of photos although they should be in there */}
        {console.log(this.props)}
        {this.props.photos.map((photo) => {
          return (
            <div key={photo.Key} className="imageCell">
              <img
                className="image"
                src={`http://react.sprint.s3.amazonaws.com/${photo.Key}`}
                alt={photo.Key}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

// onClick={this.props.onSinglePhotoClick.bind(null, photo.Key)
