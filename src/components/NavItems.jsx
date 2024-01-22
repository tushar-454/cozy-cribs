'use client';

import navItems from '@/utils/navItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathName = usePathname();
  return (
    <div className='flex gap-2'>
      {navItems?.map((navItem) => (
        <Link
          href={navItem.path}
          className={`rounded-full bg-slate-200/50 px-4 py-2 text-lg font-medium transition hover:bg-slate-300 ${
            pathName === navItem.path ? '!bg-slate-300' : ''
          }`}
        >
          <span className='flex items-center justify-center gap-2 lg:gap-0 xl:gap-2'>
            {navItem.icon}
            {navItem.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
