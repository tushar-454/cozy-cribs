'use client';
import API_BASE_URL from '@/api/config';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { TbLogin2 } from 'react-icons/tb';
const resolver = async (values) => {
  const errors = {};
  // Check 'name' property
  if (!values.name) {
    errors.name = {
      type: 'required',
      message: 'This is required.',
    };
  } else if (values.name.length < 3) {
    errors.name = {
      type: 'minLength',
      message: 'Must have at least 3 characters.',
    };
  }
  // Check 'email' property
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required.',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Invalid email address.',
    };
  }
  // check phone number
  if (!values.phone) {
    errors.phone = {
      type: 'required',
      message: 'Phone number is required.',
    };
  } else if (!/^\+?(88)?0?1[3456789][0-9]{8}\b/.test(values.phone)) {
    errors.phone = {
      type: 'pattern',
      message: 'Invalid phone number.',
    };
  }
  // check role
  if (!values.role) {
    errors.role = {
      type: 'required',
      message: 'Role is required.',
    };
  }
  // photoUrl check
  if (!values.photoUrl) {
    errors.photoUrl = {
      type: 'required',
      message: 'Photo is required.',
    };
  } else if (!/\S+\.(jpg|jpeg|png|gif)\b/.test(values.photoUrl)) {
    errors.photoUrl = {
      type: 'pattern',
      message: 'Invalid photo url.',
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
  // check confirm password
  if (!values['confirm-password']) {
    errors['confirm-password'] = {
      type: 'required',
      message: 'Confirm password is required.',
    };
  } else if (values['confirm-password'] !== values.password) {
    errors['confirm-password'] = {
      type: 'pattern',
      message: 'Password and confirm password must be same.',
    };
  }
  // check terms and conditions
  if (!values.terms) {
    errors.terms = {
      type: 'required',
      message: 'Terms and conditions is required.',
    };
  }
  // Add additional checks for other properties here
  return {
    values,
    errors,
  };
};
const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver });
  // handle form submit
  const onSubmit = async (e) => {
    const res = await fetch(`${API_BASE_URL}/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e),
    });
    const { success, message } = await res.json();
    if (success) {
      toast.success('User created successfully');
      reset();
      router.push('/login');
    } else {
      toast.error(message);
    }
  };
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <main className='mx-auto w-full max-w-md p-6'>
        <div className='relative mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              <Link href={'/'}>
                <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-xl rounded-tr-xl bg-slate-100 text-2xl transition-all hover:bg-slate-200 active:bg-slate-300'>
                  <RxCross2 />
                </span>
              </Link>

              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                Sign up
              </h1>
              <p className='my-4 text-sm text-gray-600 dark:text-gray-400'>
                Have an account already?{' '}
                <Link
                  className='font-medium text-[#FC7081] decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='/login'
                >
                  Login here
                </Link>
              </p>
            </div>

            {/* <!-- Form --> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                <Input
                  displayName='Full Name'
                  type='text'
                  id={'name'}
                  name='name'
                  placeholder={'Ali Abdar Rahman'}
                  formdata={{
                    ...register('name', { required: true }),
                  }}
                  error={errors?.name && errors?.name?.message}
                />
                <Input
                  displayName='Email address'
                  type='email'
                  id={'email'}
                  name='email'
                  placeholder={'example@gmail.com'}
                  formdata={{
                    ...register('email', { required: true }),
                  }}
                  error={errors?.email && errors?.email?.message}
                />
                <Input
                  displayName='Phone Number'
                  type='tel'
                  id={'phone'}
                  name='phone'
                  placeholder={'+880 1234 567890'}
                  formdata={{
                    ...register('phone', { required: true }),
                  }}
                  error={errors?.phone && errors?.phone?.message}
                />
                <select
                  id='role'
                  name='role'
                  className='focus:border-sun-500 focus:ring-sun-500 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                  {...register('role', { required: true })}
                >
                  <option value={''}>Choose your Role</option>
                  <option value={'owner'}>House Owner</option>
                  <option value={'renter'}>House Renter</option>
                </select>
                {errors?.role && (
                  <p className='mt-2 text-xs text-red-600' id='password-error'>
                    {errors?.role?.message}
                  </p>
                )}
                <Input
                  displayName={'Upload your photo'}
                  type='link'
                  id={'photoUrl'}
                  name='photoUrl'
                  formdata={{
                    ...register('photoUrl', { required: true }),
                  }}
                  error={errors?.photoUrl && errors?.photoUrl?.message}
                />
                <Input
                  displayName='Password'
                  type='password'
                  id={'password'}
                  name='password'
                  placeholder={'s909j*(^&'}
                  formdata={{
                    ...register('password', { required: true }),
                  }}
                  error={errors?.password && errors?.password?.message}
                />
                <Input
                  displayName='Confirm Password'
                  type='password'
                  id={'confirm-password'}
                  name='confirm-password'
                  placeholder={'s909j*(^&'}
                  formdata={{
                    ...register('confirm-password', { required: true }),
                  }}
                  error={
                    errors?.['confirm-password'] &&
                    errors?.['confirm-password']?.message
                  }
                />
                <Checkbox
                  displayName={'Terms and Conditions'}
                  id='terms'
                  type='checkbox'
                  name='terms'
                  formdata={{
                    ...register('terms', { required: true }),
                  }}
                />
                {errors?.terms && (
                  <p className='mt-2 text-xs text-red-600' id='password-error'>
                    {errors?.terms?.message}
                  </p>
                )}
                <button className='inline-block rounded-full bg-blue-400 px-6 py-2 text-lg font-medium text-white transition hover:bg-blue-500 active:bg-blue-600'>
                  <span className='flex items-center justify-center gap-2'>
                    Signup
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
