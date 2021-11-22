import React from "react";
import { useParams } from "react-router";

const Screen = (props) => {
  const params = useParams(); 
  return (
    <div><br /><br /><br />Screen {params.screen_id}</div>
  );
};

export default Screen;
