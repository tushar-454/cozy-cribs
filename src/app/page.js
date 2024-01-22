import { Carousel } from '@/components/Carousel';
import PopulerHouse from '@/components/PopulerHouse';
import Testimonial from '@/components/Testimonial';

const Home = () => {
  return (
    <main>
      <Carousel />
      <PopulerHouse />
      <Testimonial />
    </main>
  );
};

export default Home;
