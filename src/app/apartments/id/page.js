import ApartmentDetails from '@/components/ApartmentDetails';
import ApartmentImages from '@/components/ApartmentImages';
import Container from '@/components/shared/Container';

const page = () => {
  return (
    <section>
      <Container>
        {/* apartment details page wrapper  */}
        <div className='flex flex-col gap-5 py-10 md:flex-row'>
          {/* apartment details page images  */}
          <ApartmentImages />
          {/* apartment details with renter info */}
          <ApartmentDetails />
        </div>
      </Container>
    </section>
  );
};

export default page;
