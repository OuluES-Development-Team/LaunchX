import React from 'react';
import information from '../information.json'; // Import the JSON file

function Sponsors() {
    const sponsorships = Array.isArray(information.sponsorships) ? information.sponsorships : [];

    return (
        <div className='py-8'>
            <h2 className='text-2xl font-semibold mb-1'>Sponsors</h2>
            <p className='text-gray-600 mb-6'>Support our event by becoming a sponsor!</p>
            <div className='grid md:grid-cols-3 gap-15 w-full'>
                {sponsorships.map((sponsorship, index) => (
                    <div key={index} className='bg-gray-200 rounded-lg p-6'>
                        <div className='bg-gray-300 h-40 m-3 rounded'></div>
                        <div className="text-lg px-3">
                            <div className="text-lg font-semibold">{sponsorship.name}</div>
                            <p className="text-gray-700">{sponsorship.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;