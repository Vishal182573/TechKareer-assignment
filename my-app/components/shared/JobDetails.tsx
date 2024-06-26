"use client"
import React from 'react';
import { jobData } from '@/global/data';
import Image from 'next/image';

const JobDetails: React.FC = () => {
  return (
    <section className="p-7 lg:px-20 flex flex-col space-y-5">
      <div className="flex justify-start items-center space-x-4">
        <h2 className="text-sm lg:text-3xl font-bold">{jobData.title}</h2>
        <span className='text-gray-500 text-xs lg:text-md'>Posted: {jobData.postedDate}</span>
        <div className='text-xs lg:text-md px-1 lg:px-2 border-2 border-green-300 bg-green-100 rounded-full text-green-700 flex items-center justify-center'><div className='h-2 w-2 mr-2 bg-green-600 rounded-full '></div>{jobData.status}</div>
      </div>
      <div className="flex space-x-8 font-semibold text-gray-500 lg:text-lg text-xs">
        <div className='flex justify-center items-center space-x-2'>
          <Image
          src={jobData.location.img}
          alt='location-logo'
          height={15}
          width={15}
          />
        <span>{jobData.location.place}</span>
        </div>
        <div className='flex justify-center items-center space-x-2'>
          <Image
          src={jobData.salary.img}
          alt='location-logo'
          height={20}
          width={20}
          />
        <span>{jobData.salary.val}</span>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
