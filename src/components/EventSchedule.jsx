import React from 'react';
import ScheduleCard from './ScheduleCard';
import information from '../information.json';
import './EventSchedule.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot }    from '@fortawesome/free-solid-svg-icons';


function EventSchedule() {
  // Sort events chronologically by the first date in each workshop's dates array
  const scheduleItems = Array.isArray(information.workshops) 
    ? [...information.workshops].sort((a, b) => {
        const dateA = a.dates?.[0]?.date || '';
        const dateB = b.dates?.[0]?.date || '';
        
        // Parse dates in DD-MM-YYYY format
        const [dayA, monthA, yearA] = dateA.split('-').map(Number);
        const [dayB, monthB, yearB] = dateB.split('-').map(Number);
        
        // Create Date objects (months are 0-indexed in JavaScript Date)
        const dateObjA = new Date(yearA, monthA - 1, dayA);
        const dateObjB = new Date(yearB, monthB - 1, dayB);
        
        // Compare dates
        return dateObjA - dateObjB;
      })
    : [];

  const programInfo = information.programInfo || {};
  
  // Format date as "May 31, 2025" using Intl.DateTimeFormat
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    // Parse the date in DD-MM-YYYY format
    const [day, month, year] = dateString.split('-').map(Number);
    
    // Create a Date object
    const dateObj = new Date(year, month - 1, day);
    
    // Use Intl.DateTimeFormat for clean, localized formatting
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',  // "May" instead of "5"
      day: 'numeric', // "31" instead of "031"
      year: 'numeric' // "2025" instead of "25"
    }).format(dateObj);
  };

  return (
    <div className="event-schedule">
      <h2 data-text="Event Schedule">Event Schedule</h2>
      <p className="event-subheading" data-text={`${programInfo.duration}`}>
        {programInfo.duration}
      </p>
      
      <div className="schedule-info">
        <p data-text={programInfo.location}>
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
          {programInfo.location}
        </p>
      </div>

      <div className="schedule-list expanded">
        {scheduleItems.map((item, index) => {
          const firstDate = item.dates?.[0];
          const date = firstDate?.date;
          const startTime = firstDate?.startTime;
          const endTime = firstDate?.endTime;
          const day = firstDate?.day;

          // Format date with Intl.DateTimeFormat and include day of week if available
          const formattedDate = date ? 
            (day ? `${day}, ${formatDate(date)}` : formatDate(date)) : 
            '';
          
          const timeInfo = startTime && endTime ? 
            `${startTime} - ${endTime}` : 
            startTime ? `${startTime}` : '';

          return (
            <div className="schedule-card" key={index}>
              <ScheduleCard
                title={item.title}
                date={formattedDate}
                time={timeInfo}
                description={item.description}
                instructor={item.instructor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventSchedule;