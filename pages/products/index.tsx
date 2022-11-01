import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import Pagination from '../../components/Pagination';
import { ProductListItem } from '../../components/Product';

const PRODUCT_PER_PAGE = 6;
const TOTAL_ITEMS = 50;

const ProductsPage = ({
  data,
  currentPage,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Main>
        <ul className='grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {data.map((product) => {
            return (
              <li key={product.id}>
                <ProductListItem
                  data={{
                    id: product.id,
                    title: product.title,
                    thumbnailUrl: product.image,
                    thumbnailAlt: product.title,
                  }}
                />
              </li>
            );
          })}
        </ul>
        <Pagination
          totalItems={TOTAL_ITEMS}
          currentPage={currentPage}
          itemsPerPage={PRODUCT_PER_PAGE}
          renderPageLink={(page) => `/products/${page}`}
        />
      </Main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCT_PER_PAGE}&offset=${0}`
  );
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
      currentPage: 1,
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
