import React from "react";
import "./Ticket.scss";

const Ticket = () => {
  return (
    <div className="ticket-container" id="ticket">
      <h1 data-text="Get Your Tickets Now!">Get Your Tickets Now!</h1>
      <div className="tickets-wrapper">
        {/* First Ticket */}
        <div className="ticket-card">
          <div className="ticket-title">VISITOR</div>
          <div className="ticket-price">Free</div>
          <ul className="ticket-features">
            <li>Access to corporate-only activities</li>
            <li>Entry to startups, investors & corporates through our networking app</li>
            <li>Media bank</li>
            <li>Networking Lounge Access</li>
            <li>Entrance to the Afterparty</li>
          </ul>
          <a 
            className="buy-button" 
            href="https://kide.app/events/9dabd7c4-135e-477c-a29c-9edb146a7a7e"
            target="_blank"
            rel="noopener noreferrer">
            Get Ticket
          </a>
        </div>

        {/* Second Ticket */}
        <div className="ticket-card participant">
          <div className="ticket-title">PARTICIPANT</div>
          <div className="ticket-price">Free</div>
          <ul className="ticket-features">
            <li>All VISITOR benefits</li>
            <li>Priority seating at events</li>
            <li>Exclusive mentor sessions</li>
            <li>Premium networking lounge</li>
            <li>VIP afterparty access</li>
            <li>Official LaunchX merchandise</li>
          </ul>
          <a 
            className="buy-button" 
            href="https://kide.app/events/9dabd7c4-135e-477c-a29c-9edb146a7a7e"
            target="_blank"
            rel="noopener noreferrer">
            Get Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ticket;