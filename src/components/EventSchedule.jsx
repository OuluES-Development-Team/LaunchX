import React from 'react';
import ScheduleCard from './ScheduleCard';
import information from '../information.json';
import './EventSchedule.scss';

function EventSchedule() {
  const scheduleItems = Array.isArray(information.workshops) 
    ? [...information.workshops].sort((a, b) => {
        const dateA = a.dates?.[0]?.date || '';
        const dateB = b.dates?.[0]?.date || '';
        const [dayA, monthA, yearA] = dateA.split('-').map(Number);
        const [dayB, monthB, yearB] = dateB.split('-').map(Number);
        const dateObjA = new Date(yearA, monthA - 1, dayA);
        const dateObjB = new Date(yearB, monthB - 1, dayB);
        return dateObjA - dateObjB;
      })
    : [];

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [day, month, year] = dateString.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(dateObj);
  };

  return (
    <div className="event-schedule">
      <h2 data-text="Event Schedule">Event Schedule</h2>

      <div className="schedule-list expanded">
        {scheduleItems.map((item, index) => {
          const dates = item.dates || []; 
          const formattedDates = dates.map(({ date, day }) =>
            date ? (day ? `${day}, ${formatDate(date)}` : formatDate(date)) : ''
          );
          const times = dates.map(({ startTime, endTime }) =>
            startTime && endTime ? `${startTime} - ${endTime}` : startTime || ''
          );
          const locations = dates.map(({ location }) => location || '');

          return (
            <div className="schedule-card" key={index}>
              <ScheduleCard
                title={item.title}
                date={formattedDates}
                time={times}
                location={locations}
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
