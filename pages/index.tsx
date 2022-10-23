import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Home = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='bg-gray-500 flex-grow'>MAIN</main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
