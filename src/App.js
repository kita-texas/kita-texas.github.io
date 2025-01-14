import './App.css';
import "./themeColor.css";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Pricing from './pages/Pricing/Pricing.js';
import Reservation from './pages/Reservation/Reservation.js';

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/plan' element={<Pricing />} />
            <Route path='/reservation' element={<Reservation />} />
          </Routes>
        </div>
      </LocalizationProvider>
  );
}

export default App;
