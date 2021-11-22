import React from "react";
import { Link } from "react-router-dom";

const ScreenThumbnail = (props) => {
  return (
    <Link to={'/play/' + props.id} style={{ color: 'black' }}>
      <div className="screen-thumbnail">
        <p className="screen-name">{props.name}</p>
        <img className="screen-image" src={require(`images/screens/${props.image_url}`)} alt={props.name} />
      </div>
    </Link>
  );
};

export default ScreenThumbnail;
