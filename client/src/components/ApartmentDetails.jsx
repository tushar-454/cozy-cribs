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

const ApartmentDetails = ({ apartment }) => {
  return (
    <div className='w-full md:w-1/2'>
      {/* apartment details  */}
      <div className='space-y-3 rounded-lg border bg-white p-4'>
        <h1 className='text-2xl font-bold italic'>Apartment Information</h1>
        {/* location  */}
        <p className='flex items-center gap-1'>
          <IoLocationOutline />
          {apartment.city}
        </p>
        {/* apartment name */}
        <h1 className='text-2xl font-bold'>{apartment.name}</h1>
        {/* apartment details */}
        <p>{apartment.description}</p>
        {/* apartment address details */}
        <div className='flex justify-between border-b pb-3'>
          <small className='flex items-center gap-1'>
            <FaBuildingFlag />
            Block - {apartment?.location?.block}
          </small>
          <small className='flex items-center gap-1'>
            <MdFollowTheSigns />
            Road - {apartment?.location?.road}
          </small>
          <small className='flex items-center gap-1'>
            <AiOutlineApartment />
            House - {apartment?.location?.house}
          </small>
        </div>
        {/* apartment price and other details */}
        <div className='flex items-center justify-between'>
          <p className='text-xl font-black'>5500$</p>
          <div className='flex items-center gap-3'>
            <p className='flex items-center gap-1'>
              <IoMoveOutline />
              {apartment?.roomDetails?.size}m<sup>2</sup>
            </p>
            <p className='flex items-center gap-1'>
              <IoBedOutline /> {apartment?.roomDetails?.bedrooms}
            </p>
            <p className='flex items-center gap-1'>
              <LiaBathSolid /> {apartment?.roomDetails?.bathrooms}
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
              src={apartment?.ownerInfo?.image}
              alt='owner'
              className='h-14 w-14 cursor-pointer rounded-full object-cover'
              width={56}
              height={56}
            />
            <div>
              <h1 className='text-xl font-bold'>
                {apartment?.ownerInfo?.name}
              </h1>
              <a
                href={`tel:${apartment?.ownerInfo?.name}`}
                className='text-gray-500'
              >
                {apartment?.ownerInfo?.phone}
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
