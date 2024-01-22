import SingleApartmentCard from '@/components/SingleApartmentCard';
import Container from '@/components/shared/Container';

const page = () => {
  return (
    <main>
      <Container>
        <h1 className='my-4 text-center text-3xl  font-bold'>
          All Apartment List
        </h1>
        {/* all apartment list wrapper  */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {/* single apartment card  */}
          {[{}, {}, {}, {}].map((apartment, index) => (
            <SingleApartmentCard key={index} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default page;
