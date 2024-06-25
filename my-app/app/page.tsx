// pages/index.tsx
import Head from 'next/head';
import JobDetails from '@/components/shared/JobDetails';
import Requirements from '@/components/shared/Skills';
import JobInfo from '@/components/shared/JobInfo';
import CompanyInfo from '@/components/shared/CompanyInfo';
import Sidebar from '@/components/shared/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex w-full ">
        <div className="flex-1 p-3 space-y-4">
          <JobDetails />
          <Requirements />
          <JobInfo />
          <CompanyInfo />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
