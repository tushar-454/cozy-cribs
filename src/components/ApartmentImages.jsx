'use client';
import Image from 'next/image';
import { useState } from 'react';

const sliderImages = [
  {
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
const ApartmentImages = () => {
  const [imgIdx, setImgIdx] = useState(0);
  return (
    <div className='w-full space-y-5 md:w-1/2'>
      <Image
        src={sliderImages[imgIdx]?.img || sliderImages[0].img}
        alt='display images'
        className='w-full rounded-lg object-cover'
        width={1260}
        height={750}
      />
      <div className='flex items-center justify-center gap-4'>
        {sliderImages.map((image, index) => (
          <Image
            key={index}
            src={image.img}
            alt='apartment'
            width={1260}
            height={750}
            onClick={() => setImgIdx(index)}
            className={`w-1/5 cursor-pointer rounded-lg ${
              imgIdx === index && 'border-2 border-blue-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ApartmentImages;
