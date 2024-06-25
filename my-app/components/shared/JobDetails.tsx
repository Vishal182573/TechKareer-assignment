"use client"
import React from 'react';
import { jobData } from '@/global/data';

const JobDetails: React.FC = () => {
  return (
    <section className="p-5 px-20 shadow-sm flex flex-col space-y-8">
      <div className="flex justify-start items-center space-x-4">
        <h2 className="text-2xl lg:text-4xl font-bold">{jobData.title}</h2>
        <span className='text-gray-500 text-xs lg:text-md'>Posted: {jobData.postedDate}</span>
        <div className='text-xs lg:text-md px-1 lg:px-2 border-2 border-green-300 bg-green-100 rounded-full text-green-700 flex items-center justify-center'><div className='h-2 w-2 mr-2 bg-green-600 rounded-full '></div>{jobData.status}</div>
      </div>
      <div className="flex space-x-12 font-semibold text-gray-500 lg:text-lg text-xs">
        <span>{jobData.location}</span>
        <span>{jobData.salary}</span>
      </div>
    </section>
  );
};

export default JobDetails;
