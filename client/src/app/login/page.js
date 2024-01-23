'use client';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import { TbLogin2 } from 'react-icons/tb';

const page = () => {
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <main className='mx-auto w-full max-w-md p-6 '>
        <div className='relative mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              <Link href={'/'}>
                <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-xl rounded-tr-xl bg-slate-100 text-2xl transition-all hover:bg-slate-200 active:bg-slate-300'>
                  <RxCross2 />
                </span>
              </Link>

              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                Sign in
              </h1>
              <p className='my-4 text-sm text-gray-600 dark:text-gray-400'>
                Don&apos;t have an account yet?{' '}
                <Link
                  className='font-medium text-[#FC7081] decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='/signup'
                >
                  Sign up here
                </Link>
              </p>
            </div>

            {/* <!-- Form --> */}
            <form onSubmit={() => {}}>
              <div className='grid gap-y-4'>
                <Input
                  displayName='Email address'
                  type='email'
                  id={'email'}
                  name='email'
                  placeholder={'example@gmail.com'}
                />
                <Input
                  displayName='Password'
                  type='password'
                  id={'password'}
                  name='password'
                  placeholder={'s909j*(^&'}
                  isGroup={true}
                />
                <Checkbox
                  displayName={'Remember Me'}
                  id='remember-me'
                  type='checkbox'
                  name='remember-me'
                />
                <button className='inline-block rounded-full bg-blue-400 px-6 py-2 text-lg font-medium text-white transition hover:bg-blue-500 active:bg-blue-600'>
                  <span className='flex items-center justify-center gap-2'>
                    Login
                    <TbLogin2 />
                  </span>
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
