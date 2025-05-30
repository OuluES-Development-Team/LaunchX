import React, { useEffect, useState } from 'react';
import './EventDescription.scss';

const images = [
  'https://res.cloudinary.com/daf9up52k/image/upload/v1748633198/Kopio_8th_may_presentation_9_zfzxjn.png',
  'https://res.cloudinary.com/daf9up52k/image/upload/v1748633190/Kopio_8th_may_presentation_7_zqh31s.png'
];

function EventDescription() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-section" id="about">
      <div className="event-box">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Event slide ${index + 1}`}
            className={`event-background ${currentIndex === index ? 'visible' : ''}`}
          />
        ))}
      </div>

      <div className="event-text">
        <h1 className="event-title" data-text="About LaunchX">About LaunchX</h1>
        <p className="event-paragraph" data-text="Summer Accelerator Program 2025">
          Summer Accelerator Program 2025
        </p>
        <p className="event-subtext">
          The Oulu Summer Accelerator Program 2025 is designed to support 
          early-stage startups by providing a blend of in-person workshops, physical events, and virtual 
          components for global engagement. This program empowers startups to validate ideas, 
          scale business models, and connect with mentors and investors. Hosted in Oulu, Finland, key events such as the{' '}
          <span className="highlighted-text">Outdoor Startup Fair</span>,{' '}
          <span className="highlighted-text">Pitch Day</span>, and{' '}
          <span className="highlighted-text">Nordic Retreat</span> will complement workshops held at Tellus or Business Corner.
        </p>
      </div>
    </div>
  );
}

export default EventDescription;
