import React from 'react';
import './EventDescription.scss';

function EventDescription() {
  return (
    <div className="event-section" id="about">
      <div className="event-text">
        <h1 className="event-title" data-text="About LaunchX">
          About LaunchX
        </h1>
        <p className="event-paragraph" data-text="Summer Accelerator Program 2025">
          Summer Accelerator Program 2025
        </p>
        <p className="event-subtext" data-text="The Oulu Summer Accelerator Program 2025 
        is designed to support early-stage startups by providing a blend of in-person workshops, 
        physical events, and virtual components for global engagement. 
        This program empowers startups to validate ideas, scale business models, and connect with mentors and investors.
        Hosted in Oulu, Finland, key events such as the Outdoor Startup Fair, 
        Pitch Day, and Nordic Retreat will complement workshops held at Tellus or Business Corner.">
          The Oulu Summer Accelerator Program 2025 is designed to support 
          early-stage startups by providing a blend of in-person workshops, physical events, and virtual 
          components for global engagement. This program empowers startups to validate ideas, 
          scale business models, and connect with mentors and investors. Hosted in Oulu, Finland, key events such as the{' '}
          <span className="highlighted-text">Outdoor Startup Fair</span>,{' '}
          <span className="highlighted-text">Pitch Day</span>, and{' '}
          <span className="highlighted-text">Nordic Retreat</span> will complement workshops held at Tellus or Business Corner.
        </p>
      </div>
      <div className="event-box">
        <span className="event-number">:D</span>
      </div>
    </div>
  );
}

export default EventDescription;