import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Page/Landingpage';
import Beranda from './Page/Beranda';
import LoginUser from './Page/LoginUser';
import RegisterUser from './Page/RegisterUser';
import LoginAdmin from './Page/LoginAdmin';
import RegisterAdmin from './Page/RegisterAdmin';
import Admin from './Page/Admin';

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/LoginUser" element={<LoginUser />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
          <Route path="/Admin" element={<Admin />} />
          

        </Routes>
      </div>
    </Router>
  );
};
export default App;