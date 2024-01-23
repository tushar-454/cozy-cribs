'use client';
import AsideItems from '@/components/AsideItems';
import { useState } from 'react';

const Dashboard = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <section>
      <div className='relative flex'>
        <div
          className={`absolute w-[240px] ${
            isCollapse ? 'left-0' : '-left-60'
          } transition-all lg:relative lg:left-0`}
        >
          <AsideItems isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </div>
        <div className='min-h-screen flex-grow bg-white p-8 dark:bg-slate-700'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
