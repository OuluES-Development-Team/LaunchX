import React from "react";
import "./Ticket.scss";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <h1 data-text="Get Ticket Now!">Get Ticket Now!</h1>
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
    </div>
  );
};

export default Ticket;