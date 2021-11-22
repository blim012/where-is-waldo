import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import uniqid from 'uniqid';
import ScreenThumbnail from "./ScreenThumbnail";
import ScreenScores from "./ScreenScores";

const ScreenSelect = () => {
  const [screens, setScreens] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/waldo_screens')
    .then((response) => {
      let data = response.data;
      setScreens(data);
    })
    .catch((error) => {
      // Error handle here
    })
  }, []);

  return (
    <div className="screen-select">
      {
        screens 
          ? 
          <ul>
            {screens.map((screen) => {
              return (
                <li className="screen-container" key={uniqid('screen-')}>
                  <ScreenThumbnail id={screen.id} name={screen.name} image_url={screen.image_url} />
                  <ScreenScores scores={screen.scores} />
                </li>
              )
            })}
          </ul>

          : 
          <div className="loading">
            <br /><br />
            Loading...
          </div>
      }
    </div>
  );
};

export default ScreenSelect
