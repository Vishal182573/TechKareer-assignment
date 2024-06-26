'use client';
import React from 'react';
import { jobData } from '@/global/data';
import { Button } from '../ui/button';
import Image from 'next/image';
import { SIDEBARDELTE, SIDEBAREDIT,SIDEBARMATCHES,SIDEBARPEOPLE,SIDEBARVIEW,SIDEBARMESSAGE } from '@/public';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`bg-gray-50 shadow-md p-4 lg:w-1/5 w-full lg:block ${
        isOpen ? 'block absolute' : 'hidden'
      }`}
    >
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-4">
        <Button
          variant="ghost"
          className="w-full px-8 sm:w-auto border-2 border-orange-500 text-orange-500 bg-orange-50 hover:bg-orange-100 transition-colors"
        >
          <Image src={SIDEBARDELTE} alt='delete-icons' width={10} height={10} className='mr-2'/>
          Delete Job
        </Button>
        <Button
          variant="ghost"
          className="w-full px-8 sm:w-auto text-white bg-orange-600 hover:bg-orange-700 transition-colors"
        >
          <Image src={SIDEBAREDIT} alt='delete-icons' width={10} height={10} className='mr-2'/>
          Edit Job
        </Button>
      </div>

      <div className="mt-8 space-y-4">
        {Object.entries(jobData.stats).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center border-b-2 border-gray-300 py-3 px-2"
          >
            <div className=" flex justify-center items-center space-x-1">
            <Image src={value.img} alt='delete-icons' width={20} height={20} className='mr-2'/>
            <h3 className="text-sm font-medium capitalize">{key}</h3>
            </div>
            <p className="font-bold text-lg">{value.stat}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
