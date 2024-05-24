import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Page/Landingpage';
import Beranda from './Page/Beranda';
import Login from './Page/Login';
import Register from './Page/Register';


const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
};
export default App;