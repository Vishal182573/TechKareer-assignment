'use client'
import Head from 'next/head';
import JobDetails from '@/components/shared/JobDetails';
import Requirements from '@/components/shared/Skills';
import JobInfo from '@/components/shared/JobInfo';
import CompanyInfo from '@/components/shared/CompanyInfo';
import Sidebar from '@/components/shared/Sidebar';
import Header from '@/components/shared/Header';
import { useState } from 'react';
import Seprator from '@/components/shared/Seprator';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen">
      <Seprator/>
      <Header toggleSidebar={toggleSidebar} />
      <Seprator/>
      <main className="flex w-full">
        <div className="flex-1 p-3 ">
          <JobDetails />
      <Seprator/>
          <Requirements />
      <Seprator/>
          <JobInfo />
      <Seprator/>
          <CompanyInfo />
      <Seprator/>
        </div>
        <Sidebar isOpen={isSidebarOpen} />
      </main>
    </div>
  );
}
