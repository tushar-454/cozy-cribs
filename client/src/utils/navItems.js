import { FaHome } from 'react-icons/fa';
import { FaServicestack } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { MdApartment } from 'react-icons/md';

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    name: 'Apartments',
    path: '/apartments',
    icon: <MdApartment />,
  },
  {
    name: 'Services',
    path: '/services',
    icon: <FaServicestack />,
  },
  {
    name: 'About Us',
    path: '/about-us',
    icon: <FcAbout />,
  },
];

export default navItems;
