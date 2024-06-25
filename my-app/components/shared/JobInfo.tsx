'use client'


import React from 'react';
import { jobData } from '@/global/data';

const JobInfo: React.FC = () => {
  return (
    <section className="p-5 px-20 shadow-sm">
      <h3 className="text-sm  text-gray-500 mb-3">About the job</h3>
      <ul className=" list-decimal pl-4">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>Work on creating graphics content and other graphic related works</li>
      </ul>
      <h3 className="mt-4">Benefits:</h3>
      <ul className="list-disc pl-4">
        {jobData.benefits.map(benefit => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <h3 className=" mt-4">Schedule</h3>
      <p>{jobData.schedule}</p>
      <h3 className=" mt-4">Supplemental pay types:</h3>
      <ul className="list-disc pl-4">
        {jobData.payTypes.map(payType => (
          <li key={payType}>{payType}</li>
        ))}
      </ul>
      <div className=" mt-4">Work Location: <span >{jobData.workLocation}</span></div>
    </section>
  );
};

export default JobInfo;
