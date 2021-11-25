import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Navigate } from 'react-router-dom';
import axios from "axios";
import Screen from "./Screen";
import ScoreForm from "./ScoreForm";
import Header from "./Header";
import Loading from "./Loading";

const Game = (props) => {
  const params = useParams();
  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [positions, setPositions] = useState({});
  const [icons, setIcons] = useState({});
  const [screen, setScreen] = useState(null);
  const [found, setFound] = useState({Waldo: false, Wenda: false, Odlaw: false, Wizard: false});
  const [win, setWin] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);

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
      setPlaying(true);
    });
  }, []);

  useEffect(() => {
    let interval = null;
    if(playing) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [playing, seconds]);

  useEffect(() => {
    if(checkWin()) {
      setWin(true);
    }
  }, [found]);

  const checkSelection = (character, xPercentage, yPercentage) => {
    if(found[character]) return false; // Already found character
    const errorMargin = 0.03;
    const upperRangeX = positions[character].x_pos + errorMargin;
    const lowerRangeX = positions[character].x_pos - errorMargin;
    const upperRangeY = positions[character].y_pos + errorMargin;
    const lowerRangeY = positions[character].y_pos - errorMargin;
    if((xPercentage <= upperRangeX && xPercentage >= lowerRangeX) &&
       (yPercentage <= upperRangeY && yPercentage >= lowerRangeY)) {
      let foundToSet = {...found};
      let iconsToSet = {...icons};
      foundToSet[character] = true;
      delete iconsToSet[character];
      setFound(foundToSet);
      setIcons(iconsToSet);
      return true;
    }
    return false;
  };

  const checkWin = () => {
    const foundList = Object.values(found);
    for(let i = 0; i < foundList.length; i++) {
      if(!foundList[i]) return false;
    }
    setPlaying(false);
    return true;
  }

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('score-name');
    axios.post('/api/v1/scores', {seconds: seconds, name: name, waldo_screen_id: params.screen_id})
    .then((response) => {
      let data = response.data;
      if(data.hasOwnProperty('errors')) {
        displayFormSubmitErrors(form, data.errors);
      }
      else {
        setRedirectHome(true);
      }
    })
  }

  const displayFormSubmitErrors = (form, errors) => {
    let formErrorElement = form.querySelector('.form-errors');
    if(formErrorElement) {
      formErrorElement.innerHTML = errors.reduce((msg, error) => {
        return msg + error + "<br />";
      }, 'Error:<br />');
    }
  }

  if(redirectHome) return <Navigate to="/" />

  return (
    <div id="game-container">
      <Header headerText={[`Time: ${seconds}`]}/>

      {
      screen
        ?
        <div id="game">
          <Screen screen={screen} icons={icons} win={win} checkSelection={checkSelection}/>
          { win && 
            <ScoreForm handleScoreSubmit={handleScoreSubmit} />
          }
        </div>

        :
        <Loading />
      }
    </div>
  );
};

export default Game;
