import React from "react";

export const SinglePhoto = (props) => {
  return (
    <div className="single-photo-wrapper">
      <img
        className="single-photo"
        src={`https://react.sprint.s3.amazonaws.com/${props.selectedPhoto}`}
        alt={props.selected}
      />
    </div>
  );
};
