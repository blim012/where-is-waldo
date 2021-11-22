import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import uniqid from 'uniqid';
import ScreenThumbnail from "./ScreenThumbnail";

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
                  <ScreenThumbnail name={screen.name} image_url={screen.image_url} />
                  <ul className="screen-scores">
                    <h2 className="screen-score-header">Scores:</h2>
                    {screen.scores.map((score, index) => {
                      return (
                        <li key={uniqid('score-')}>
                          <p className="score">#{index + 1} - {score.name}: {score.seconds}</p>
                        </li>
                      )
                    })}
                  </ul>
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
