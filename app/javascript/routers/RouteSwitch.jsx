import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreenSelect from "../components/ScreenSelect";
import Screen from "../components/Screen";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenSelect />} />
        <Route exact path="/:screen_id" element={<Screen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
