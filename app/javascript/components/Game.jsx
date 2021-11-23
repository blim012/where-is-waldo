import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Screen from "./Screen";

const Game = (props) => {
  const params = useParams();
  const [seconds, setSeconds] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [positions, setPositions] = useState({});
  const [icons, setIcons] = useState({});
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    axios.get(`/api/v1/waldo_screens/${params.screen_id}`)
    .then((response) => {
      let data = response.data;
      let positionsToSet = {};
      let iconsToSet = {};
      let screenToSet = {id: data.id, name: data.name, image_url: require(`images/screens/${data.image_url}`)};
      data.positions.forEach((position) => {
        let iconSrc = require(`images/characters/${position.character.image_url}`);
        iconsToSet[position.character.name] = iconSrc;
        positionsToSet[position.character.name] = {x_pos: parseFloat(position.x_pos), y_pos: parseFloat(position.y_pos)};
      });

      setPositions(positionsToSet);
      setIcons(iconsToSet);
      setScreen(screenToSet);
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

  const checkSelection = (character, xPercentage, yPercentage) => {
    const errorMargin = 0.03;
    const upperRangeX = positions[character].x_pos + errorMargin;
    const lowerRangeX = positions[character].x_pos - errorMargin;
    const upperRangeY = positions[character].y_pos + errorMargin;
    const lowerRangeY = positions[character].y_pos - errorMargin;
    if((xPercentage <= upperRangeX && xPercentage >= lowerRangeX) &&
       (yPercentage <= upperRangeY && yPercentage >= lowerRangeY)) {
      console.log(`${character} has been found`);
    }
  };

  return (
    <div id="game">
      {
      screen
        ?
        <div>
          <br /><br /><br />
          <p>Game Screen {params.screen_id}</p>
          <p>Seconds Elapsed: {seconds}</p>
          <button onClick={() => setLoaded(true)}>Start Time</button>
          <button onClick={() => setLoaded(false)}>Stop Time</button>
          <Screen screen={screen} icons={icons} checkSelection={checkSelection}/>
        </div>

        :
        <div className="loading">
              <br /><br />
              Loading...
        </div>
      }
    </div>
  );
};

export default Game;
