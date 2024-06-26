'use client';

import React from 'react';
import { jobData } from '@/global/data';
import Image from 'next/image';
import { COMPANYLOGO } from '@/public';

const CompanyInfo: React.FC = () => {
  return (
    <section className="p-4 lg:px-20">
      <div>
        <div className='flex space-x-4 items-center justify-start'>
          <Image
            src={COMPANYLOGO}
            alt='companylogo'
            width={50}
            height={50}
            className='border'
          />
          <h4 className="text-lg font-bold">{jobData.company.name}</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs lg:text-lg">
          <div>
            <p className="text-gray-600">Company size</p>
            <p className="font-semibold">{jobData.company.size}</p>
          </div>
          <div>
            <p className="text-gray-600">Type</p>
            <p className="font-semibold">{jobData.company.type}</p>
          </div>
          <div>
            <p className="text-gray-600">Industry</p>
            <p className="font-semibold">{jobData.company.industry}</p>
          </div>
          <div>
            <p className="text-gray-600">Founded In</p>
            <p className="font-semibold">{jobData.company.foundedIn}</p>
          </div>
          <div>
            <p className="text-gray-600">Funding</p>
            <p className="font-semibold">{jobData.company.funding}</p>
          </div>
          <div>
            <p className="text-gray-600">Founded By</p>
            <p className="font-semibold">{jobData.company.founders.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;

