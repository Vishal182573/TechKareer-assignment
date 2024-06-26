'use client'
import Head from 'next/head';
import JobDetails from '@/components/shared/JobDetails';
import Requirements from '@/components/shared/Skills';
import JobInfo from '@/components/shared/JobInfo';
import CompanyInfo from '@/components/shared/CompanyInfo';
import Sidebar from '@/components/shared/Sidebar';
import Header from '@/components/shared/Header';
import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <main className="flex w-full">
        <div className="flex-1 p-3 space-y-4">
          <JobDetails />
          <Requirements />
          <JobInfo />
          <CompanyInfo />
        </div>
        <Sidebar isOpen={isSidebarOpen} />
      </main>
    </div>
  );
}
