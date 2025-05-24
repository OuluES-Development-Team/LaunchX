import React from 'react';
import information from '../information.json';
import './Sponsors.scss';

function Sponsors() {
  const partners = Array.isArray(information.partners) ? information.partners : [];

  return (
    <div className='sponsors' id="sponsors">
      <h2 data-text="OUR PARTNERS">OUR PARTNERS</h2>

      <div className='sponsor-grid'>
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className='sponsor-logo'
          >
            <img src={partner.image} alt={partner.name} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;