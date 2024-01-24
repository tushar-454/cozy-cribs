'use client';
import API_BASE_URL from '@/api/config';
import SingleApartmentCard from '@/components/SingleApartmentCard';
import Container from '@/components/shared/Container';
import { useEffect, useState } from 'react';

const page = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/user/getApartment`)
      .then((res) => res.json())
      .then((data) => {
        setApartments(data.apartments);
      });
  }, []);
  return (
    <main>
      <Container>
        <h1 className='my-4 text-center text-3xl  font-bold'>
          All Apartment List
        </h1>
        {/* all apartment list wrapper  */}
        <div className='grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3'>
          {/* single apartment card  */}
          {apartments?.map((apartment, index) => (
            <SingleApartmentCard key={index} apartment={apartment} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default page;
