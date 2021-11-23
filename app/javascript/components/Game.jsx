import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Game = (props) => {
  const params = useParams();
  const [seconds, setSeconds] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [positions, setPositions] = useState({});
  const [icons, setIcons] = useState({});
  const [screen, setScreen] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/waldo_screens/${params.screen_id}`)
    .then((response) => {
      let data = response.data;
      let positionsToSet = {};
      let iconsToSet = {};
      data.positions.forEach((position) => {
        let iconSrc = require(`images/characters/${position.character.image_url}`);
        iconsToSet[position.character.name] = iconSrc;
        positionsToSet[position.character.name] = {x_pos: position.x_pos, y_pos: position.y_pos};
      });

      setPositions(positionsToSet);
      setIcons(iconsToSet);
    })
    .catch((error) => {
      // Catch error here
    });
  }, []);

  useEffect(() => {
    let interval = null;
    if(loaded) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [loaded, seconds]);

  return (
    <div>
      <br /><br /><br />
      <p>Game Screen {params.screen_id}</p>
      <p>Seconds Elapsed: {seconds}</p>
      <button onClick={() => setLoaded(true)}>Start Time</button>
      <button onClick={() => setLoaded(false)}>Stop Time</button>
    </div>
  );
};

export default Game;
