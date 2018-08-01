import React from "react";

export const SinglePhoto = (props) => {
  return (
    <div>
      <img src={"https://react.sprint.s3.amazonaws.com/" + props.selected} />
    </div>
  )
}

