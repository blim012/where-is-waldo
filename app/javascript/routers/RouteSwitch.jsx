import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreenSelect from "../components/ScreenSelect";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenSelect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
