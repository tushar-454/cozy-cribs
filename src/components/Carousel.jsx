'use client';
import sliderImages from '@/utils/sliderImages';
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1,
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1,
    );

  return (
    <div className='mx-auto my-1 flex h-[340px] flex-col items-center gap-5 overflow-hidden md:h-[670px] lg:flex-row lg:gap-10'>
      <div className='relative overflow-hidden'>
        {/* arrow */}
        <div className='absolute z-50 flex h-full w-full items-center justify-between px-5'>
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className='flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff50] md:h-8 md:w-8'
          >
            <FaArrowCircleLeft className='text-3xl text-white' />
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className='flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff50] md:h-8 md:w-8'
          >
            <FaArrowCircleRight className='text-3xl text-white' />
          </button>
        </div>
        {/* dots */}
        <div className='absolute bottom-4 z-50 flex w-full items-center justify-center gap-1 rounded-full'>
          {sliderImages?.map((_, inx) => (
            <button
              key={inx}
              onClick={() => {
                setCurrentSlider(inx);
              }}
              className={`rounded-full bg-white duration-300 ${
                currentSlider === inx ? 'w-10' : 'w-2'
              } h-2`}
            ></button>
          ))}
        </div>
        {/* slider container */}
        <div
          className='relative flex transform-gpu duration-300 ease-linear'
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <div key={inx} className='min-w-full duration-200'>
              <Image
                src={slide.img}
                className='h-72 w-full object-cover sm:h-96 md:h-[670px]'
                alt={`Slider - ${inx + 1}`}
                width={1920}
                height={288}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
