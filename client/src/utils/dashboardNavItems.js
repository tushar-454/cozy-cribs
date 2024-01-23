import {
  BsBuildingAdd,
  BsBuildingGear,
  BsBuildingSlash,
  BsBuildings,
} from 'react-icons/bs';

const dashboardNavItems = [
  {
    route: 'All Apartment',
    path: '/dashboard/all-apartment',
    icon: <BsBuildings />,
  },
  {
    route: 'Add a Apartment',
    path: '/dashboard/add-apartment',
    icon: <BsBuildingAdd />,
  },
  {
    route: 'Manage Apartment',
    path: '/dashboard/manage-apartment',
    icon: <BsBuildingGear />,
  },
  {
    route: 'Booked Apartment',
    path: '/dashboard/booked-apartment',
    icon: <BsBuildingSlash />,
  },
];

export default dashboardNavItems;
