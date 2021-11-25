import React from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';

const Header = (props) => {
  const headerText = props.headerText;

  return (
    <header className="header">
      <Link to="/" className="home-link header-item">
        <p>Where's Waldo</p>
      </Link>
      {headerText && headerText.map((text) => {
        return (
          <div className="header-text header-item" key={uniqid('header-')}>
            <p>{text}</p>
          </div>
        )
      })}
    </header>
  )
}

export default Header;
