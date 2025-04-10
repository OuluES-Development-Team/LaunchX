import React, { useState } from 'react';
import ScheduleCard from './ScheduleCard';
import information from '../information.json';
import './EventSchedule.scss';

function EventSchedule() {
  const [isExpanded, setIsExpanded] = useState(false);
  const scheduleItems = Array.isArray(information.workshops) ? information.workshops : [];

  return (
    <div className="event-schedule">
      <h2 data-text="Event Schedule">Event Schedule</h2>
      <p className="event-subheading" data-text="Subheading">Subheading</p>

      <button className="dropdown-button" onClick={() => setIsExpanded(prev => !prev)}>
        <span className="front">{isExpanded ? 'Hide Events' : 'Show All Events'}</span>
      </button>

      <div className={`schedule-list ${isExpanded ? 'expanded' : ''}`}>
        {scheduleItems.map((item, index) => {
          const firstDate = item.dates?.[0];
          const date = firstDate?.date;
          const startTime = firstDate?.startTime;

          return (
            <div className="schedule-card" key={index}>
              <ScheduleCard
                title={item.title}
                date={date}
                time={startTime}
                description={item.dates
                  .map(dateObj => `${dateObj.date} (Start: ${dateObj.startTime} End: ${dateObj.endTime})`)
                  .join(', ')}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventSchedule;
