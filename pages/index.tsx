import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ProductDetails } from '../components/Product';

const DATA = {
  id: 1,
  title: 'title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem rem fugiat cum et incidunt, quisquam expedita, quaerat vitae animi minus reiciendis. Id sed neque laudantium distinctio quo rerum velit!',
  thumbnailUrl: 'https://picsum.photos/seed/picsum/1060/1080',
  thumbnailAlt: 'sample image',
  rating: 4.5,
};

const Home = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-gray-50'>
        <Header />
        <Main>
          <ProductDetails data={DATA} />
        </Main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
