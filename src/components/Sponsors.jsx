import React from 'react';
import information from '../information.json';
import './Sponsors.scss';

function Sponsors() {
  const sponsorships = Array.isArray(information.sponsorships) ? information.sponsorships : [];

  return (
    <div className='sponsors'>
      <h2 data-text="OUR PARTNERS">OUR PARTNERS</h2>

      <div className='sponsor-tier-section'>
        {sponsorships.map((sponsorship, index) => (
          <div key={index} className='sponsor-card'>
            <h3 className='tier-title' data-text={sponsorship.name}>{sponsorship.name}</h3>
            <div className='sponsor-grid'>
              {/* Logo placeholders will go here later */}
              <div className='image-placeholder'>
                <span>{sponsorship.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
