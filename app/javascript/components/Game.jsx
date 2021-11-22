import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Game = (props) => {
  const params = useParams();

  return (
    <div><br /><br /><br />Game Screen {params.screen_id}</div>
  );
};

export default Game;
