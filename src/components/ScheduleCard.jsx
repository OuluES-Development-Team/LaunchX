import React from 'react';

function ScheduleCard({ title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex">
        <div className="w-1/6 mr-4">
          <div className="bg-gray-200 h-24 w-full rounded"></div>
        </div>
        <div className="w-5/6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;