import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Game = (props) => {
  const params = useParams();
  const [seconds, setSeconds] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
