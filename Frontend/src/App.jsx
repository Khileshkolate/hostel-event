import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './LandingPage/HomePage';
import GaneshChaturthiPage from './Components/GaneshChaturthiPage';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard';
import SaraswatiPujaPage from './Components/SaraswatiPujaPage';
import RawanDahanPage from './Components/RawanDahanPage';
import SportsLeaguePage from './Components/SportsLeaguePage ';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ganesh-chaturthi" element={<GaneshChaturthiPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/saraswati-puja" element={<SaraswatiPujaPage/>} />
          <Route path="/rawan-dahan" element={<RawanDahanPage />} />
          <Route path="/sports/:sport" element={<SportsLeaguePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;