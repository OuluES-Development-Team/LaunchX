// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDescription from './components/EventDescription';
import EventSchedule from './components/EventSchedule';
import Sponsors from './components/Sponsors';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <EventDescription />
        <EventSchedule />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}

export default App;
