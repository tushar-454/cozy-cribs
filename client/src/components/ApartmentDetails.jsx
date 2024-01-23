import Image from 'next/image';
import { AiFillStar, AiOutlineApartment, AiOutlineStar } from 'react-icons/ai';
import { FaBuildingFlag } from 'react-icons/fa6';
import {
  IoBedOutline,
  IoLocationOutline,
  IoMoveOutline,
} from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';
import { MdFollowTheSigns } from 'react-icons/md';

const ApartmentDetails = () => {
  return (
    <div className='w-full md:w-1/2'>
      {/* apartment details  */}
      <div className='space-y-3 rounded-lg border bg-white p-4'>
        <h1 className='text-2xl font-bold italic'>Apartment Information</h1>
        {/* location  */}
        <p className='flex items-center gap-1'>
          <IoLocationOutline />
          Apartment - Gulshan Ave
        </p>
        {/* apartment name */}
        <h1 className='text-2xl font-bold'>South Sun House House</h1>
        {/* apartment details */}
        <p>
          Modern and spacious apartment with open-concept living areas, offering
          a perfect blend of comfort an
        </p>
        <p>
          Modern and spacious apartment with open-concept living areas, offering
          a perfect blend of comfort an
        </p>
        <p>
          Modern and spacious apartment with open-concept living areas, offering
          a perfect blend of comfort an
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
          <button className='bg-primary w-full rounded-lg border-2 border-blue-400 bg-blue-400 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-white hover:text-blue-500 active:text-blue-600'>
            Book Now
          </button>
        </div>
      </div>
      {/* apartment owner info  */}
      <div className='mt-5 space-y-3 rounded-lg border bg-white p-4'>
        <h1 className='text-2xl font-bold italic'>Owner Information</h1>
        <div className='flex justify-between gap-3'>
          {/* owner info  */}
          <div className='flex items-center gap-3'>
            <Image
              src={'https://cutt.ly/BwLkXPVV'}
              alt='owner'
              className='h-14 w-14 cursor-pointer rounded-full object-cover'
              width={56}
              height={56}
            />
            <div>
              <h1 className='text-xl font-bold'>John Doe</h1>
              <a href='tel:+8801234567890' className='text-gray-500'>
                +880 1234567890
              </a>
            </div>
          </div>
          {/* user reviwes start  */}
          <div>
            <div className='flex items-center gap-1'>
              <span className='flex items-center gap-1'>
                <AiFillStar className='text-2xl text-yellow-400' />
                <AiFillStar className='text-2xl text-yellow-400' />
                <AiFillStar className='text-2xl text-yellow-400' />
                <AiFillStar className='text-2xl text-yellow-400' />
                <AiOutlineStar className='text-2xl' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
