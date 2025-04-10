import React from "react";
import "./Ticket.scss";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <h1 data-text="Get Ticket Now!">Get Ticket Now!</h1>
      <div className="ticket-card">
        <div className="ribbon">LATE BIRD</div>
        <div className="ticket-title">VISITOR</div>
        <div className="ticket-price">€171</div>
        <ul className="ticket-features">
          <li>Access to corporate-only activities</li>
          <li>Entry to startups, investors & corporates through our networking app</li>
          <li>Media bank</li>
          <li>Networking Lounge Access</li>
          <li>Entrance to the Afterparty</li>
        </ul>
        <button className="buy-button">BUY TICKET</button>
      </div>
    </div>
  );
};

export default Ticket;
