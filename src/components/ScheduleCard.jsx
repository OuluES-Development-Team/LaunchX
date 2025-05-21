import React from "react";
import "./ScheduleCard.scss";

function ScheduleCard({ title, description, time, date, instructor, location }) {
  // Process description to separate deliverables if present
  let mainDescription = description;
  let deliverables = null;

  if (description && description.includes("Deliverables:")) {
    const parts = description.split("Deliverables:");
    mainDescription = parts[0].trim();
    deliverables = parts[1].trim();
  }

  // Handle instructors as either string or array
  const displayInstructors = () => {
    if (!instructor) return null;

    // If instructor is an array, join with ampersand
    if (Array.isArray(instructor)) {
      return <p className="instructor">By {instructor.join(" & ")}</p>;
    }

    // Single instructor as string
    return <p className="instructor">By {instructor}</p>;
  };

  return (
    <div className="custom-card">
      <div className="left-badge">
        {Array.isArray(date) && date.length > 0 ? (
          date.map((d, index) => (
            <div key={index} className="date-time">
              <div className="time">{time[index]}</div>
              <div className="date">{d}</div>
              <div className="location">{location[index]}</div>
            </div>
          ))
        ) : (
          <div className="date-time">
            <div className="time">{time}</div>
            <div className="date">{date}</div>
            <div className="location">{location}</div>
          </div>
        )}
      </div>
      <div className="card-content">
        <div className="text-content">
          <h3 className="title" data-text={title}>
            {title}
          </h3>
          {displayInstructors()}
          <p className="description" data-text={mainDescription}>
            {mainDescription}
          </p>
          {deliverables && (
            <div className="deliverables">
              <h4 data-text={"Deliverables:"}>Deliverables:</h4>
              <p data-text={deliverables}>{deliverables}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;