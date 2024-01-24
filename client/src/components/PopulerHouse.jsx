'use client';
import API_BASE_URL from '@/api/config';
import SingleApartmentCard from '@/components/SingleApartmentCard';
import Container from '@/components/shared/Container';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const PopulerHouse = () => {
  const [populerApartments, setPopulerApartments] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/user/getApartment`, {
      next: {
        revalidate: 1,
      },
    })
      .then((res) => res.json())
      .then((data) => setPopulerApartments(data.apartments));
  }, []);
  return (
    <section className='bg-slate-50 py-10'>
      <Container>
        <h1 className='my-4 text-center text-3xl  font-bold'>Popular House</h1>
        {/* Popular House list wrapper  */}
        <div className='grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3'>
          {/* single apartment card  */}
          {populerApartments?.map((apartment, index) => (
            <SingleApartmentCard key={index} apartment={apartment} />
          ))}
        </div>
        <Link
          href={'/apartments'}
          className='bg-primary mx-auto block w-fit rounded-lg border-2 border-[#FC7081] bg-[#FC7081] px-5 py-3 font-semibold text-white transition hover:border-[#FC7081] hover:bg-white hover:text-[#FC7081] active:bg-slate-100'
        >
          View Details
        </Link>
      </Container>
    </section>
  );
};

export default PopulerHouse;
