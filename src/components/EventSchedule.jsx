import React from 'react';
import ScheduleCard from './ScheduleCard';
import information from '../information.json'; 

function EventSchedule() {
  const scheduleItems = Array.isArray(information.workshops) ? information.workshops : [];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-1">Event Schedule</h2>
      <p className="text-gray-600 mb-6">Subheading</p>
      
      <div className="space-y-6">
        {scheduleItems.map((item, index) => (
          <ScheduleCard 
            key={index} 
            title={item.title} 
            description={item.dates.map(dateObj => `${dateObj.date} (Start: ${dateObj.startTime} End: ${dateObj.endTime})`).join(', ')}
          />
        ))}
      </div>
    </div>
  );
}

export default EventSchedule;