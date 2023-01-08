import { gql } from '@apollo/client';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Main } from '../../components/Main';
import Pagination from '../../components/Pagination';
import { ProductListItem } from '../../components/Product';
import { apolloClient } from '../../graphql/apolloClient';
import {
  GetProductsListDocument,
  GetProductsListQuery,
} from '../../generated/graphql';

const PRODUCT_PER_PAGE = 6;
const TOTAL_ITEMS = 50;

const ProductsPage = ({
  data,
  currentPage,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <>
      <Main>
        <ul className='grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {data.products.map((product) => {
            return (
              <li key={product.slug}>
                <ProductListItem
                  data={{
                    id: product.slug,
                    title: product.name,
                    thumbnailUrl: product.images[0].url,
                    thumbnailAlt: product.name,
                  }}
                />
              </li>
            );
          })}
        </ul>
        {/* <Pagination
          totalItems={TOTAL_ITEMS}
          currentPage={currentPage}
          itemsPerPage={PRODUCT_PER_PAGE}
          renderPageLink={(page) => `/products/${page}`}
        /> */}
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      data,
      currentPage: 1,
    },
  };
};

export default ProductsPage;
