'use client';
import { useEffect, useRef, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Container from './shared/Container';

const Testimonial = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const testimonialBox = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Student',
      testimonialDescription:
        'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework',
      keyWord: 'Child',
    },
    {
      name: 'Jane Doe',
      designation: 'Freelancer',
      testimonialDescription:
        'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance',
      keyWord: 'Gentlewoman',
    },
    {
      name: 'Shiyam Sarker',
      designation: 'Entrepreneur',
      testimonialDescription:
        "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.",
      keyWord: 'Gentleman',
    },
    {
      name: 'Bob Smith',
      designation: 'Creative Professional',
      testimonialDescription:
        'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.',
      keyWord: 'Child',
    },
    {
      name: 'Eva Williams',
      designation: 'Remote Worker',
      testimonialDescription:
        "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.",
      keyWord: 'Individual',
    },
    {
      name: 'Chris Brown',
      designation: 'Parent',
      testimonialDescription:
        'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.',
      keyWord: 'Boy',
    },
    {
      name: 'Olivia Davis',
      designation: 'Health Professional',
      testimonialDescription:
        'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.',
      keyWord: 'Girl',
    },
    {
      name: 'Liam Wilson',
      designation: 'Researcher',
      testimonialDescription:
        "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals",
      keyWord: 'Toddler',
    },
  ];

  // The slider images testimonials
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? testimonials.length - 2 : currentSlider - 1,
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === testimonials.length - 2 ? 0 : currentSlider + 1,
    );
  useEffect(() => {
    let intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    testimonialBox.current?.addEventListener('mouseenter', () => {
      clearInterval(intervalId);
    });
    testimonialBox.current?.addEventListener('mouseleave', () => {
      intervalId = setInterval(() => {
        nextSlider();
      }, 3000);
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);
  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;
    setIsSmallScreen(isSmallScreen);
  }, []);

  return (
    <section className='py-10'>
      <Container>
        <h1 className='my-5 text-center text-3xl  font-bold'>Testimonials</h1>
        {/* user feedback list wrapper  */}
        <div
          ref={testimonialBox}
          className='mx-auto flex  flex-row items-center gap-5 overflow-hidden lg:gap-10'
        >
          <div className='relative overflow-hidden'>
            <div className='absolute flex h-full w-full items-center justify-between px-5'>
              {/* arrow left */}
              <button
                onClick={prevSlider}
                className='flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8'
              >
                <FaArrowCircleLeft className='text-3xl text-slate-300' />
              </button>
              {/* arrow right */}
              <button
                onClick={nextSlider}
                className='flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8'
              >
                <FaArrowCircleRight className='text-3xl text-slate-300' />
              </button>
            </div>
            {/* slider container */}
            <div
              className='flex duration-300 ease-linear'
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 100 : 50)
                }%)`,
              }}
            >
              {/* sliders */}
              {testimonials.map((each, idx) => (
                <div key={idx} className='min-w-full p-4 md:min-w-[50%]'>
                  <div className='h-full rounded p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='mb-4 block h-5 w-5 text-slate-800'
                      viewBox='0 0 975.036 975.036'
                    >
                      <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                    </svg>
                    <p className='mb-6 leading-relaxed text-gray-500'>
                      {each?.testimonialDescription}
                    </p>
                    <a className='inline-flex items-center'>
                      <img
                        alt='testimonial'
                        src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
                        className='h-12 w-12 flex-shrink-0 rounded-full object-cover object-center'
                      />
                      <span className='flex flex-grow flex-col pl-4'>
                        <span className='title-font font-medium text-gray-900'>
                          {each.name}
                        </span>
                        <span className='text-sm text-gray-500'>
                          {each?.designation}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Testimonial;
