'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardNavItem = ({ setIsCollapse, navItem }) => {
  const pathName = usePathname();
  return (
    <Link
      onClick={() => setIsCollapse(false)}
      className={`flex items-center gap-x-3 whitespace-nowrap p-4 text-lg font-medium text-gray-500 transition-all ${
        pathName === navItem.path ? '!bg-white' : ''
      }`}
      href={navItem.path}
    >
      {navItem.icon}
      {navItem.route}
    </Link>
  );
};

export default DashboardNavItem;
