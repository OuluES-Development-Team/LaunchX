// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDescription from './components/EventDescription';
import EventSchedule from './components/EventSchedule';
import Sponsors from './components/Sponsors';
import './index.css';
import Footer from './components/Footer';
import Ticket from './components/Ticket';
import Team from './components/Team';
import Mentor from './components/Mentor';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <EventDescription />
        <EventSchedule />
        <Mentor />
        <Ticket />
        {/* <Team /> */}
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}

export default App;
