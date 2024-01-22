import Link from 'next/link';
import { TbLogin2 } from 'react-icons/tb';

const UserAccount = () => {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? (
        <></>
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
