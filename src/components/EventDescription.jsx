import React from 'react';

function EventDescription() {
  return (
    <div className="flex flex-col md:flex-row py-12">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <p className="text-lg">
          Example text or description of the event
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200 rounded-lg flex items-center justify-center h-64">
        <span className="text-6xl text-gray-300">3</span>
      </div>
    </div>
  );
}

export default EventDescription;