import React from "react";
import uniqid from 'uniqid';

const ScreenScores = (props) => {
  return (
    <ul className="screen-scores">
      <h2 className="screen-score-header">Scores:</h2>
      {props.scores.map((score, index) => {
        return (
          <li key={uniqid('score-')}>
            <p className="score">#{index + 1} - {score.name}: {score.seconds}</p>
          </li>
        )
      })}
    </ul>
  );
};

export default ScreenScores;
