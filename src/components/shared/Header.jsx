import NavItems from '../NavItems';
import UserAccount from '../UserAccount';
import Container from './Container';

const Header = () => {
  return (
    <header className='border-b bg-slate-50'>
      <Container>
        {/* header wrapper  */}
        <div className='flex items-center justify-between py-2'>
          {/* header logo */}
          <div>
            <h1 className='whitespace-nowrap text-3xl font-black'>
              Cozy Cribs
            </h1>
          </div>
          {/* header nav  */}
          <NavItems />
          {/* user login button or user profile */}
          <UserAccount />
        </div>
      </Container>
    </header>
  );
};

export default Header;
