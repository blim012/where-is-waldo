import React from "react";

const FoundCircle = (props) => {
  const x = props.x;
  const y = props.y;

  return <div className="found-circle" style={{top: `${y}px`, left: `${x}px`}}></div>;
};

export default FoundCircle;
