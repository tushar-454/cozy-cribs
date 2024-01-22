'use client';
import accordions from '@/utils/faq';
import { useState } from 'react';
import Container from './shared/Container';
export const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <section>
      <Container>
        <h1 className='my-5 text-center text-3xl  font-bold'>
          Frequently asked question
        </h1>
        {/* faq list wrapper  */}
        <div className='mx-4 rounded-lg border font-sans'>
          {accordions?.map((perAccordion, idx) => (
            <div key={idx} className='border-b p-4'>
              <button
                onClick={() => toggle(idx)}
                className='flex h-full w-full items-center justify-between py-4'
              >
                <span className='text-xl'>{perAccordion.title}</span>
                <svg
                  className='ml-8 shrink-0 fill-[#00A2FF]'
                  width='16'
                  height='16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    y='7'
                    width='16'
                    height='2'
                    rx='1'
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && '!rotate-180'
                    }`}
                  />
                  <rect
                    y='7'
                    width='16'
                    height='2'
                    rx='1'
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && '!rotate-180'
                    }`}
                  />
                </svg>
              </button>
              <div
                className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out  ${
                  isOpen === idx
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className='overflow-hidden'>
                  {perAccordion.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
