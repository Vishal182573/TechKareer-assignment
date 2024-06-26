'use client';
import React from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className='flex justify-between items-center p-5 lg:p-4 w-full text-gray-400 font-semibold'>
      <div className='flex justify-center lg:justify-start items-center space-x-20 text-gray-350'>
        <div className="hover:text-orange-600 lg:ml-20 cursor-pointer text-orange-600 text-xs lg:text-lg">Job Preview</div>
        <div className="hover:text-orange-600 cursor-pointer text-xs lg:text-lg">Applicants</div>
        <div className="hover:text-orange-600 cursor-pointer text-xs lg:text-lg">Match</div>
        <div className="hover:text-orange-600 cursor-pointer text-xs lg:text-lg">Messages</div>
      </div>
      <FaBars
        className='lg:hidden cursor-pointer text-xl text-black'
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Header;
