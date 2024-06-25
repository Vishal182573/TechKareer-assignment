'use client'

import React from 'react';
import { jobData } from '@/global/data';
import { Button } from '../ui/button';

const Sidebar: React.FC = () => {
  return (
    <aside className="p-4 shadow-md bg-gray-50 w-1/5 hidden lg:block px-6">
      <div className="flex justify-between items-center space-x-4 mt-4">
        <Button variant={"ghost"} className='border-2 border-orange-500 text-orange-500 bg-orange-50 px-8'>
          Delete Job
        </Button>
        <Button variant={"ghost"} className='text-white bg-orange-600 px-12'>
          Edit Job
        </Button>
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center mt-12 px-6">
      <div className="flex w-full justify-between items-center border-b-2 border-gray-300 p-2 py-5">
        <h3 >Applicants</h3>
        <p className='font-bold'>{jobData.stats.applicants}</p>
      </div>
      <div className="flex w-full justify-between items-center border-b-2 border-gray-300 p-2 py-5">
        <h3>Matches</h3>
        <p className='font-bold'>{jobData.stats.Matches}</p>
      </div>
      <div className="flex w-full justify-between items-center border-b-2 border-gray-300 p-2 py-5">
        <h3>Messages</h3>
        <p className='font-bold'>{jobData.stats.messages}</p>
      </div>
      <div className="flex w-full justify-between items-center border-b-2 border-gray-300 p-2 py-5">
        <h3 >Views</h3>
        <p className='font-bold'>{jobData.stats.views}</p>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
