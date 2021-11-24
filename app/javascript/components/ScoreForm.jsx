import React from "react";

const ScoreForm = (props) => {
  let handleScoreSubmit = props.handleScoreSubmit; 
  
  return (
    <form id="score-form" onSubmit={handleScoreSubmit}>
      <label htmlFor="score-name">You found them! Submit your score!</label><br />
      <input id="score-name" name="score-name" type="text" autoFocus minLength="3" maxLength="12" required></input>
      <p className="form-errors"></p>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default ScoreForm
