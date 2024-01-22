const Checkbox = ({ displayName, id, ...rest }) => {
  return (
    <div className='flex items-center'>
      <div className='flex'>
        <input
          {...rest}
          id={id}
          className='pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800'
        />
      </div>
      <div className='ms-3'>
        <label htmlFor={id} className='text-sm dark:text-white'>
          {displayName}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
