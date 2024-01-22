import { Carousel } from '@/components/Carousel';
import { Faq } from '@/components/Faq';
import PopulerHouse from '@/components/PopulerHouse';
import Testimonial from '@/components/Testimonial';

const Home = () => {
  return (
    <main>
      <Carousel />
      <PopulerHouse />
      <Testimonial />
      <Faq />
    </main>
  );
};

export default Home;
