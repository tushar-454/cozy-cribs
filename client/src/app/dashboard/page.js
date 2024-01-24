'use client';
import { AuthContext } from '@/authProvider/AuthProvider';
import AsideItems from '@/components/AsideItems';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const Dashboard = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const router = useRouter();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user === null || user === 'null') {
      router.push('/');
    }
  }, []);
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
