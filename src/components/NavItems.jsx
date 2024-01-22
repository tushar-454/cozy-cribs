'use client';
import { FaBars } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';

import navItems from '@/utils/navItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavItems = () => {
  const pathName = usePathname();
  const [isNavItemsOpen, setIsNavItemsOpen] = useState(false);
  return (
    <div className='relative w-full lg:w-fit'>
      {/* small device nav items collapse & uncollapse button */}
      <div
        onClick={() => setIsNavItemsOpen(!isNavItemsOpen)}
        className='absolute -top-6 right-2 rounded-2xl bg-slate-200/50 px-3 py-2 lg:hidden'
      >
        {isNavItemsOpen ? (
          <HiOutlineX className='text-3xl' />
        ) : (
          <FaBars className='text-3xl' />
        )}
      </div>
      {/* actual all nav items  */}
      <div
        className={`absolute -right-32 top-[30px] flex-col gap-2 space-y-5 rounded-bl-md rounded-br-md border bg-slate-50 p-3 transition-all lg:static lg:right-0 lg:top-0 lg:flex-row lg:space-y-0 lg:border-none lg:bg-none lg:p-0  ${
          isNavItemsOpen ? 'transform-undo' : 'transform'
        }`}
      >
        {navItems?.map((navItem) => (
          <Link
            href={navItem.path}
            className={`block rounded-full bg-slate-200/50 px-4 py-2 text-lg font-medium transition hover:bg-slate-300 lg:mr-1 lg:inline-block ${
              pathName === navItem.path ? '!bg-slate-300' : ''
            }`}
          >
            <span className='flex items-center justify-start gap-2 lg:justify-center lg:gap-0 xl:gap-2'>
              {navItem.icon}
              {navItem.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
