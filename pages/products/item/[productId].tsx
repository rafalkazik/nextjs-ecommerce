import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ProductDetails } from '../../../components/Product';
import { apolloClient } from '../../../graphql/apolloClient';
import {
  GetProductDetailsDocument,
  GetProductDetailsQuery,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from '../../../generated/graphql';

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak... :/</div>;
  }

  return (
    <div>
      <ProductDetails
        data={{
          id: data.id,
          title: data.name,
          description: data.description,
          thumbnailUrl: data.images[0].url,
          thumbnailAlt: data.name,
          rating: 5,
          longDescription: data.description,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<GetProductDetailsQuery>({
    variables: {
      slug: params.productId,
    },
    query: GetProductDetailsDocument,
  });

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: { ...data.products[0] },
    },
  };
};
