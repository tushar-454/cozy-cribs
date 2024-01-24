'use client';
import API_BASE_URL from '@/api/config';
import { AuthContext } from '@/authProvider/AuthProvider';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { TbLogin2 } from 'react-icons/tb';

const resolver = async (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required.',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Email is invalid.',
    };
  }
  // check password
  if (!values.password) {
    errors.password = {
      type: 'required',
      message: 'Password is required.',
    };
  } else if (values.password.length < 6) {
    errors.password = {
      type: 'minLength',
      message: 'Must have at least 6 characters.',
    };
  } else if (!/(?=.*[a-z])/.test(values.password)) {
    errors.password = {
      type: 'pattern',
      message: 'Must have at least one lowercase letter.',
    };
  } else if (!/(?=.*[A-Z])/.test(values.password)) {
    errors.password = {
      type: 'pattern',
      message: 'Must have at least one uppercase letter.',
    };
  } else if (!/(?=.*[0-9])/.test(values.password)) {
    errors.password = {
      type: 'pattern',
      message: 'Must have at least one number.',
    };
  } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
    errors.password = {
      type: 'pattern',
      message: 'Must have at least one special character.',
    };
  }
  return {
    values,
    errors,
  };
};

const page = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });
  const onSubmit = async (data) => {
    const res = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
      credentials: 'include',
    });
    const { success, message, data: userData } = await res.json();
    if (success) {
      toast.success('Login successfully!');
      setUser(userData);
      const resToken = await fetch(`${API_BASE_URL}/jwt/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
        credentials: 'include',
      });
      const { token } = await resToken.json();
      localStorage.setItem('token', token);
      router.push('/');
    } else {
      toast.error(message);
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                <Input
                  displayName='Email address'
                  type='email'
                  id={'email'}
                  name='email'
                  placeholder={'example@gmail.com'}
                  formdata={{ ...register('email', { required: true }) }}
                  error={errors?.email && errors?.email?.message}
                />
                <Input
                  displayName='Password'
                  type='password'
                  id={'password'}
                  name='password'
                  placeholder={'s909j*(^&'}
                  isGroup={true}
                  formdata={{ ...register('password', { required: true }) }}
                  error={errors?.password && errors?.password?.message}
                />
                <Checkbox
                  displayName={'Remember Me'}
                  id='remember-me'
                  type='checkbox'
                  name='remember-me'
                />
                <button
                  type='submit'
                  className='inline-block rounded-full bg-blue-400 px-6 py-2 text-lg font-medium text-white transition hover:bg-blue-500 active:bg-blue-600'
                >
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
