import React from "react";
import { Link } from "react-router-dom";

const ScreenThumbnail = (props) => {
  return (
    <Link to={'/play/' + props.id} style={{ color: 'black' }}>
      <div className="screen-thumbnail">
        <div className="screen-name">
          <p>{props.name}</p>
        </div>
        <img className="screen-image" src={require(`images/screens/${props.image_url}`)} alt={props.name} />
      </div>
    </Link>
  );
};

export default ScreenThumbnail;
