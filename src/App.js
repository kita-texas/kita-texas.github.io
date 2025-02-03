import './App.css';
import "./themeColor.css";
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Pricing from './pages/Pricing/Pricing.js';
import Reservation from './pages/Reservation/Reservation.js';
import Join from './pages/Join/Join.js';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo.js';
import NoPageFound from './pages/NoPageFound/NoPageFound.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import SignupAccount from './pages/Signup.account/Signup.account.js';

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/plan' element={<Pricing />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/join' element={<Join />} />
            <Route path='/whatwedo' element={<WhatWeDo />} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/account" element={<SignupAccount />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </div>
      </LocalizationProvider>
  );
}

export default App;
