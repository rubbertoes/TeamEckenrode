import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx';
import MembershipPage from './Pages/MembershipPage.jsx';
import TrainersPage from './Pages/TrainersPage.jsx';
import AboutContactPage from './Pages/AboutContactPage.jsx';
import GymGalleryPage from './Pages/GymGalleryPage.jsx';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/personaltrainers" element={<TrainersPage />} />
        <Route path="/about" element={<AboutContactPage />} />
        <Route path="/GymGallery" element={<GymGalleryPage />} />

      </Routes>
    </>
  );
}
export default App;
