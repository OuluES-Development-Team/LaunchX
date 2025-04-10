import React from 'react';
import './EventDescription.scss';

function EventDescription() {
  return (
    <div className="event-section">
      <div className="event-text">
        <h1 className="event-title" data-text="Startup Oulu">
          Startup Oulu
        </h1>
        <p className="event-paragraph" data-text="Example text">
         Example text
        </p>
        <p className="event-subtext" data-text="Description for the event goes here. This is a placeholder text to give an idea of what the event is about. It can include details about the schedule, activities, and any other relevant information.">
          Description for the event goes here. This is a placeholder text to give an idea of what the event is about. It can include details about the schedule, activities, and any other relevant information.
        </p>

      </div>
      <div className="event-box">
        <span className="event-number">:D</span>
      </div>
    </div>
  );
}

export default EventDescription;
