import React from 'react';
import ScheduleCard from './ScheduleCard';

function EventSchedule() {
    const scheduleItems = [
      {
        id: 1,
        title: "Title",
        description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      },
      {
        id: 2,
        title: "Title",
        description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      }
    ];
  
    return (
      <div className="py-8">
        <h2 className="text-2xl font-semibold mb-1">Event Schedule</h2>
        <p className="text-gray-600 mb-6">Subheading</p>
        
        <div className="space-y-6">
          {scheduleItems.map(item => (
            <ScheduleCard key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    );
  }
  
  export default EventSchedule;