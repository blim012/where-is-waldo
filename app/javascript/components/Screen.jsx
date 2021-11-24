import React from "react";
import uniqid from 'uniqid';

const Screen = (props) => {
  const {id, name, image_url} = props.screen;
  const icons = props.icons;
  const checkSelection = props.checkSelection;
  const win = props.win;

  const handleDropDown = (e) => {
    if(win) return;
    let dropdown = document.querySelector('.dropdown');
    let dropdownList = document.querySelector('.dropdown-list');
    let screen = document.querySelector('#screen');
    if(!(dropdown && dropdownList && screen)) return;
    if(e.target === screen) {
      const clickOffsetY = e.nativeEvent.offsetY;
      const clickOffsetX = e.nativeEvent.offsetX;
      const [dropdownListOffsetX, 
             dropdownListOffsetY, 
             verticalBiteOrientation, 
             horizontalBiteOrientation] 
             = handleDropdownListOffset(clickOffsetX, clickOffsetY);
      dropdown.setAttribute('style', `top:${clickOffsetY}px;left:${clickOffsetX}px;`);
      dropdown.setAttribute('data-x', clickOffsetX);
      dropdown.setAttribute('data-y', clickOffsetY);
      dropdownList.setAttribute('style', 
        `top:${dropdownListOffsetY}px;
         left:${dropdownListOffsetX}px;
         mask-image: radial-gradient(circle at ${verticalBiteOrientation} ${horizontalBiteOrientation}, transparent 0, transparent 25px, black 21px);`);
      dropdown.classList.toggle('no-display');
    }
    else {
      dropdown.classList.add('no-display');
    }
  };

  const handleDropdownListOffset = (clickOffsetX, clickOffsetY) => {
    let dropdownList = document.querySelector('.dropdown-list');
    if(dropdownList) {
      let dropdownWidth = dropdownList.offsetWidth;
      let dropdownHeight = dropdownList.offsetHeight;
      const [xPercentage, yPercentage] = convertOffsetToPercent(clickOffsetX, clickOffsetY);
      if(xPercentage < 0.5) { // Left half
        if(yPercentage < 0.5) { // Top half
          // Crosshair at top left
          return [0, 0, 'top', 'left'];
        }
        else { // Bottom half
          // Crosshair at bottom left
          return [0, -dropdownHeight, 'bottom', 'left'];
        }
      }
      else { // Right half
        if(yPercentage < 0.5) { // Top half
          // Crosshair at top right
          return [-dropdownWidth, 0, 'top', 'right'];
        }
        else { // Bottom half
          // Crosshair at bottom right
          return [-dropdownWidth, -dropdownHeight, 'bottom', 'right'];
        }
      }
    }
  }

  // TODO: refactor to use convertOffsetToPercent
  const handleSelection = (key) => {
    let dropdown = document.querySelector('.dropdown');
    let screen = document.querySelector('#screen');
    if(!(dropdown && screen)) return;
    let clickOffsetX = dropdown.getAttribute('data-x');
    let clickOffsetY = dropdown.getAttribute('data-y');
    if(!(clickOffsetX && clickOffsetY)) return;
    let xPercentage = clickOffsetX / screen.offsetWidth;
    let yPercentage = clickOffsetY / screen.offsetHeight;
    checkSelection(key, xPercentage, yPercentage);
  };

  const convertOffsetToPercent = (clickOffsetX, clickOffsetY) => {
    let screen = document.querySelector('#screen');
    if(screen) {
      return [clickOffsetX / screen.offsetWidth, clickOffsetY / screen.offsetHeight];
    }
  };

  return (
    <div id="game-screen" onClick={handleDropDown} className={win ? 'greyscale-60' : ''}>
      <div className="dropdown no-display">
        <div className="dropdown-rel-wrapper">
          <div className="crosshair crosshair-inner"></div>
          <div className="crosshair crosshair-border"></div>
          <div className="dropdown-list">
            {Object.keys(icons).map((key) => {
              return (
                <div className="dropdown-item" key={uniqid('dropdown-')} onClick={() => handleSelection(key)}>
                  <img src={icons[key]} />
                  <p>{key}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <img id="screen" src={image_url} alt="Oops, something went wrong! Game screen cannot load." />
    </div>
  );
};

export default Screen;
