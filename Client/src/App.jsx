import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx';
import MembershipPage from './Pages/MembershipPage.jsx';
import TrainersPage from './Pages/TrainersPage.jsx';
import AboutContactPage from './Pages/AboutContactPage.jsx';
import GymGalleryPage from './Pages/GymGalleryPage.jsx';
import MaselkaPage from './Pages/SubPages/Maselka.jsx';
import JustinCooperPage from './Pages/SubPages/JustinCooper.jsx';
import JoeLozaPage from './Pages/SubPages/Loza.jsx';
import JoeMedranoPage from './Pages/SubPages/Medrano.jsx';
import GeneMitcheltreePage from './Pages/SubPages/Gene.jsx';
import RichShulmanPage from './Pages/SubPages/Shulman.jsx';
import KevinWhitePage from './Pages/SubPages/White.jsx';
import RobertWatkinsPage from './Pages/SubPages/Watkins.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Membership" element={<MembershipPage />} />
        <Route path="/PersonalTrainers" element={<TrainersPage />} />
        <Route path="/About" element={<AboutContactPage />} />
        <Route path="/GymGallery" element={<GymGalleryPage />} />
        <Route path="/PersonalTrainers/KevinMaselka" element={<MaselkaPage />} />
        <Route path="/PersonalTrainers/JustinCooper" element={<JustinCooperPage />} />
        <Route path="/PersonalTrainers/JoeLoza" element={<JoeLozaPage />} />
        <Route path="/PersonalTrainers/JoeMedrano" element={<JoeMedranoPage />} />
        <Route path="/PersonalTrainers/GeneMitcheltree" element={<GeneMitcheltreePage />} />
        <Route path="/PersonalTrainers/RichShulman" element={<RichShulmanPage />} />
        <Route path="/PersonalTrainers/KevinWhite" element={<KevinWhitePage />} />
        <Route path="/PersonalTrainers/RobertWatkins" element={<RobertWatkinsPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

