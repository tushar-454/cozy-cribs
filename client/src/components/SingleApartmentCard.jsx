import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineApartment } from 'react-icons/ai';
import { FaBuildingFlag } from 'react-icons/fa6';
import {
  IoBedOutline,
  IoLocationOutline,
  IoMoveOutline,
} from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';
import { MdFollowTheSigns } from 'react-icons/md';

const SingleApartmentCard = ({ apartment }) => {
  return (
    <div className='space-y-3 rounded-lg border bg-white p-4'>
      {/* image  */}
      <div className='w-full'>
        <Image
          src={apartment.image}
          alt='apartment image'
          className='w-full rounded-lg object-cover'
          width={1920}
          height={300}
        />
      </div>
      {/* location  */}
      <p className='flex items-center gap-1'>
        <IoLocationOutline />
        {apartment.city}
      </p>
      {/* apartment name */}
      <h1 className='text-2xl font-bold'>{apartment.name}</h1>
      {/* apartment details */}
      <p>
        {apartment.description.length > 100
          ? apartment.description.slice(0, 100)
          : apartment.description}
      </p>
      {/* apartment address details */}
      <div className='flex justify-between border-b pb-3'>
        <small className='flex items-center gap-1'>
          <FaBuildingFlag />
          Block - {apartment.location.block}
        </small>
        <small className='flex items-center gap-1'>
          <MdFollowTheSigns />
          Road - {apartment.location.road}
        </small>
        <small className='flex items-center gap-1'>
          <AiOutlineApartment />
          House - {apartment.location.house}
        </small>
      </div>
      {/* apartment price and other details */}
      <div className='flex items-center justify-between'>
        <p className='text-xl font-black'>{apartment.price}$</p>
        <div className='flex items-center gap-3'>
          <p className='flex items-center gap-1'>
            <IoMoveOutline />
            {apartment.roomDetails.size}m<sup>2</sup>
          </p>
          <p className='flex items-center gap-1'>
            <IoBedOutline /> {apartment.roomDetails.bedrooms}
          </p>
          <p className='flex items-center gap-1'>
            <LiaBathSolid /> {apartment.roomDetails.bathrooms}
          </p>
        </div>
      </div>
      <div className='flex gap-5'>
        <button className='bg-primary w-full rounded-lg border-2 border-blue-400 py-3 font-semibold text-blue-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600'>
          Booking
        </button>

        <button className='bg-primary w-full rounded-lg border-2 border-blue-400 py-3 font-semibold text-blue-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600'>
          <Link href={`/apartments/${apartment._id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default SingleApartmentCard;
