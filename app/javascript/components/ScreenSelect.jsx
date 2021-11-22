import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import uniqid from 'uniqid';

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
                  <div className="screen-thumbnail">
                    <p className="screen-name">{screen.name}</p>
                    <img className="screen-image" src={require(`images/screens/${screen.image_url}`)} alt={screen.name}></img>
                  </div>
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
