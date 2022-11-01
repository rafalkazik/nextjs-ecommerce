import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import Pagination from '../../components/Pagination';
import { ProductListItem } from '../../components/Product';

const PRODUCT_PER_PAGE = 6;
const TOTAL_ITEMS = 50;

const ProductPage = ({
  data,
  currentPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!data) {
    return <div>Coś poszło nie tak... :/</div>;
  }

  if (router.isFallback) {
    console.log('yes');
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);

    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      <Header />
      <Main>
        <ul className='grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            data.map((product: StoreApiResponse) => {
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
            })
          )}
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

export default ProductPage;

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 5 }).map((_, i) => `/products/${i + 2}`),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ page: string }>) => {
  const page = Number(params?.page) || 1;

  if (!params?.page) {
    return {
      props: {},
      notFound: true,
    };
  }

  const offsetAmount = page === 1 ? 0 : page * 6;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCT_PER_PAGE}&offset=${offsetAmount}`
  );
  const data: StoreApiResponse | null = await res.json();

  if (page === 1) {
    return {
      redirect: {
        destination: '/products',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
      currentPage: page,
    },
  };
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
