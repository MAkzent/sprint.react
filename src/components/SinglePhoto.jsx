import React from "react";

export const SinglePhoto = (props) => {
  return (
    <div className="single-photo-wrapper">
      <img
        className="single-photo"
        src={"https://react.sprint.s3.amazonaws.com/" + props.selected}
        alt={props.selected}
      />
    </div>
  );
};
