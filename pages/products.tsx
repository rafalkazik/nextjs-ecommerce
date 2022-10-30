import { InferGetServerSidePropsType } from 'next';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Product } from '../components/Product';

const ProductsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <Main>
        <ul className='grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {data.map((product) => {
            return (
              <li key={product.id}>
                <Product
                  data={{
                    description: product.description,
                    thumbnailUrl: product.image,
                    thumbnailAlt: product.title,
                    rating: product.rating.rate,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </Main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
