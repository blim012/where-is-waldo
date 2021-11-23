import React from "react";
import uniqid from 'uniqid';

const Screen = (props) => {
  const {id, name, image_url} = props.screen;
  const icons = props.icons;

  const handleDropDown = (e) => {
    let dropdown = document.querySelector('.dropdown');
    let screen = document.querySelector('#screen');
    if(!(dropdown && screen)) return;
    if(e.target === screen) {
      dropdown.setAttribute("style", `top:${e.nativeEvent.offsetY}px;left:${e.nativeEvent.clientX}px;`);
      dropdown.classList.toggle('no-display');
    }
    else {
      dropdown.classList.add('no-display');
    }
  };

  return (
    <div id="game-screen" onClick={handleDropDown}>
      <div className="dropdown no-display">
        {Object.keys(icons).map((key) => {
          return (
            <div className="dropdown-item" key={uniqid('dropdown-')}>
              <img src={icons[key]} />
              <p>{key}</p>
            </div>
          )
        })}
      </div>
      <img id="screen" src={image_url} alt="Oops, something went wrong! Game screen cannot load." />
    </div>
  );
};

export default Screen;
