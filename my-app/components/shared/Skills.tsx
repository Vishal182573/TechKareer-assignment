"use client"
import React from 'react';
import { jobData } from '@/global/data';
import Image from 'next/image';

const Requirements: React.FC = () => {
  return (
    <section className=" p-6 lg:p-4 lg:pl-20 lg:pr-9 shadow-sm flex space-x-10 lg:space-x-20 justify-start items-start">
      <div className='flex flex-col text-sm'>
        <h3 className="font-semibold text-gray-500">Skills Required</h3>
        <ul className="flex lg:space-y-3 flex-col justify-center items-start mt-3 list-disc lg:list-none">
          {jobData.skills.map(skill => (
              <li  className="lg:border-[1px] lg:border-gray-400 lg:px-3 text-xs lg:text-sm py-1 rounded-md lg:font-semibold flex justify-center items-center" key={skill.name}>
              <Image
                src={skill.img}
                alt={skill.name}
                height={20}
                width={20}
                className='mr-2 hidden lg:block'
              />
              {skill.name}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col justify-center items-start lg:text-xl space-y-3'>
        <h3 className=" font-semibold text-gray-500 text-sm">Preferred Language</h3>
        <div className="font-bold text-sm">{jobData.preferredLanguage}</div>
      </div>
      <div className='flex flex-col justify-center items-start lg:text-xl space-y-3'>
        <h3 className=" font-semibold text-gray-500 text-sm">Type</h3>
        <div className="font-bold text-sm">{jobData.jobType}</div>
      </div>
      <div className='flex flex-col justify-center items-start lg:text-xl space-y-3'>
        <h3 className=" font-semibold text-gray-500 text-sm">Experience</h3>
        <div className="font-bold text-sm">{jobData.experience}</div>
      </div>
    </section>
  );
};

export default Requirements;
