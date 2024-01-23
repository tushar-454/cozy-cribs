'use client';
import dashboardNavItems from '@/utils/dashboardNavItems';
import { PiCaretRightFill } from 'react-icons/pi';
import DashboardNavItem from './DashboardNavItem';

const AsideItems = ({ isCollapse, setIsCollapse }) => {
  return (
    <aside className='relative z-30 bg-slate-50 dark:bg-slate-800'>
      <span
        onClick={() => setIsCollapse(!isCollapse)}
        className={`absolute -right-8 -top-1 block cursor-pointer lg:hidden ${
          isCollapse ? '!-right-4 rotate-180' : undefined
        }`}
      >
        <PiCaretRightFill className='text-sun-950 text-5xl' />
      </span>
      <div className='flex min-h-screen flex-col border-r'>
        {dashboardNavItems.map((navItem, index) => (
          <DashboardNavItem
            key={index}
            navItem={navItem}
            setIsCollapse={setIsCollapse}
          />
        ))}
      </div>
    </aside>
  );
};

export default AsideItems;
