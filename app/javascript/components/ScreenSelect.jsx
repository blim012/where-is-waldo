import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import uniqid from 'uniqid';
import ScreenThumbnail from "./ScreenThumbnail";
import ScreenScores from "./ScreenScores";
import Header from "./Header";
import Loading from "./Loading";

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
    screens 
      ? 
      <div className="screen-select-container">
        <Header />
        <ul className="screen-select">
          {screens.map((screen) => {
            return (
              <li className="screen-container" key={uniqid('screen-')}>
                <ScreenThumbnail id={screen.id} name={screen.name} image_url={screen.image_url} />
                <ScreenScores scores={screen.scores} />
              </li>
            )
          })}
        </ul>
      </div>

      : 
      <Loading />
  );
};

export default ScreenSelect
