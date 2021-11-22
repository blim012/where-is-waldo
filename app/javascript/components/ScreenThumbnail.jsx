import React from "react";

const ScreenThumbnail = (props) => {
  return (
    <div className="screen-thumbnail">
      <p className="screen-name">{props.name}</p>
      <img className="screen-image" src={require(`images/screens/${props.image_url}`)} alt={props.name} />
    </div>
  );
};

export default ScreenThumbnail;
