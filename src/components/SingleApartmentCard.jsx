import { AiOutlineApartment } from 'react-icons/ai';
import { FaBuildingFlag } from 'react-icons/fa6';
import { LiaBathSolid } from 'react-icons/lia';

import {
  IoBedOutline,
  IoLocationOutline,
  IoMoveOutline,
} from 'react-icons/io5';
import { MdFollowTheSigns } from 'react-icons/md';
const apartment =
  'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const SingleApartmentCard = () => {
  return (
    <div className='space-y-3 rounded-lg border p-4'>
      {/* image  */}
      <div className='w-full'>
        <img
          src={apartment}
          alt='apartment image'
          className='w-full rounded-lg object-cover'
        />
      </div>
      {/* location  */}
      <p className='flex items-center gap-1'>
        <IoLocationOutline />
        Apartment - Gulshan Ave
      </p>
      {/* apartment name */}
      <h1 className='text-2xl font-bold'>South Sun House House</h1>
      {/* apartment details */}
      <p>
        Modern and spacious apartment with open-concept living areas, offering a
        perfect blend of comfort an
      </p>
      {/* apartment address details */}
      <div className='flex justify-between border-b pb-3'>
        <small className='flex items-center gap-1'>
          <FaBuildingFlag />
          BLOCK - A
        </small>
        <small className='flex items-center gap-1'>
          <MdFollowTheSigns />
          FLOOR - 4A
        </small>
        <small className='flex items-center gap-1'>
          <AiOutlineApartment />
          APT. NO - 102-B
        </small>
      </div>
      {/* apartment price and other details */}
      <div className='flex items-center justify-between'>
        <p className='text-xl font-black'>5500$</p>
        <div className='flex items-center gap-3'>
          <p className='flex items-center gap-1'>
            <IoMoveOutline />
            150m<sup>2</sup>
          </p>
          <p className='flex items-center gap-1'>
            <IoBedOutline /> 2
          </p>
          <p className='flex items-center gap-1'>
            <LiaBathSolid /> 1
          </p>
        </div>
      </div>
      <div className='flex gap-5'>
        <button className='bg-primary w-full rounded-lg border-2 border-blue-400 py-3 font-semibold text-blue-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600'>
          Booking
        </button>
        <button className='bg-primary w-full rounded-lg border-2 border-blue-400 py-3 font-semibold text-blue-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600'>
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleApartmentCard;
