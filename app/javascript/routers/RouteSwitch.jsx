import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreenSelect from "../components/ScreenSelect";
import Game from "../components/Game";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenSelect />} />
        <Route exact path="/play/:screen_id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
