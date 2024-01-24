'use client';
import API_BASE_URL from '@/api/config';
import ApartmentDetails from '@/components/ApartmentDetails';
import ApartmentImages from '@/components/ApartmentImages';
import Container from '@/components/shared/Container';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState({});
  useEffect(() => {
    fetch(`${API_BASE_URL}/user/getApartment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApartment(data.apartment);
      });
  }, []);
  return (
    <section className='min-h-screen'>
      <Container>
        {/* apartment details page wrapper  */}
        <div className='flex flex-col gap-5 py-10 md:flex-row'>
          {/* apartment details page images  */}
          <ApartmentImages />
          {/* apartment details with renter info */}
          {apartment && <ApartmentDetails apartment={apartment} />}
        </div>
      </Container>
    </section>
  );
};

export default page;
