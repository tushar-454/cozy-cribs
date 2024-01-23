'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { PiSignOutBold } from 'react-icons/pi';
import { TbLogin2 } from 'react-icons/tb';

const UserAccount = () => {
  const isLoggedIn = true;
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <div
            className='group relative flex h-12 w-12 rounded-full bg-gray-800 text-sm'
            onClick={() => setDropdown(!dropdown)}
          >
            <Image
              className='h-full w-full cursor-pointer rounded-full object-cover'
              src={'https://cutt.ly/BwLkXPVV'}
              alt='user photo'
              width={48}
              height={48}
            />
          </div>
          {/* <!-- Dropdown menu --> */}
          <div
            style={{
              right: isLoggedIn ? '0px' : '-9rem',
            }}
            className={`absolute top-12 z-[99999] origin-top-right transition ${
              dropdown ? 'scale-100' : 'scale-0'
            } my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700`}
          >
            <div className='px-4 py-3'>
              <span className='block text-gray-900 dark:text-white'>
                {'Jhon Dou'}
              </span>
              <span className='block  truncate text-gray-500 dark:text-gray-400'>
                {'jhondou@gamil.com'}
              </span>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li>
                <Link
                  href='/dashboard'
                  onClick={() => {
                    setDropdown(false);
                  }}
                  className='flex cursor-pointer items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Dashboard <MdOutlineSpaceDashboard />
                </Link>
              </li>
              <li
                onClick={() => {
                  setDropdown(false);
                }}
                className='flex cursor-pointer items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Sign out <PiSignOutBold />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link
          href={'/login'}
          className='inline-block rounded-full bg-blue-400 px-6 py-2 text-lg font-medium text-white transition hover:bg-blue-500 active:bg-blue-600'
        >
          <span className='flex items-center justify-center gap-2'>
            Login
            <TbLogin2 />
          </span>
        </Link>
      )}
    </div>
  );
};

export default UserAccount;
