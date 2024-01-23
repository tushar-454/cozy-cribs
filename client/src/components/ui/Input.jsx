import { MdError } from 'react-icons/md';

const Input = ({
  displayName = 'displayName',
  id,
  isGroup = false,
  error,
  ...rest
}) => {
  return (
    <div>
      <div className='my-2 flex items-center justify-between'>
        <label
          htmlFor={id}
          className='block text-sm font-semibold dark:text-white'
        >
          {displayName}
        </label>
        {isGroup && (
          <a
            className='text-froly-600 text-sm font-semibold decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='../examples/html/recover-account.html'
          >
            Forgot password?
          </a>
        )}
      </div>
      <div className='relative'>
        <input
          {...rest}
          id={id}
          className='focus:border-sun-500 focus:ring-sun-500 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
        />
        {error && (
          <div className='pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3'>
            <MdError className='text-2xl text-red-500' />
          </div>
        )}
      </div>
      {error && (
        <p className='mt-2 text-xs text-red-600' id='password-error'>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
