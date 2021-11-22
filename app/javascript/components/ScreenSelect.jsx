import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
            {
              screens.map((screen) => {
                return <li>{screen.name}</li>
              })
            }
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