import Card from './Card';

const Header = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline underline-offset-4'>
        Header
      </h1>
      <Card isTrue={true} />
    </div>
  );
};

export default Header;
