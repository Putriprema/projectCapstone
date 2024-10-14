import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
