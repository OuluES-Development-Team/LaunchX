import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <span className="text-2xl font-bold">⊙</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#info" className="text-gray-600 hover:text-gray-900">Info</a>
          <a href="#program" className="text-gray-600 hover:text-gray-900">Program</a>
          <a href="#partners" className="text-gray-600 hover:text-gray-900">Partners</a>
          <a href="#link" className="text-gray-600 hover:text-gray-900">Link</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;