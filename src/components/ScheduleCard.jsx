import React from 'react';
import './ScheduleCard.scss';

function ScheduleCard({ title, description, time, date }) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : 'Date';

  return (
    <div className="custom-card">
      <div className="left-badge">
        <div className="time">{time}</div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="card-content">
        <div className="text-content">
          <h3 className="title" data-text={title}>{title}</h3>
          {/* <p className="description" data-text={description}>{description}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
