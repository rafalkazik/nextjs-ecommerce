import { gql, useQuery } from '@apollo/client';
import { Main } from '../components/Main';
import { ProductDetails } from '../components/Product';
import {
  CreateProductReviewDocument,
  CreateProductReviewMutation,
  CreateProductReviewMutationVariables,
} from '../generated/graphql';
import { apolloClient } from '../graphql/apolloClient';

const Home = () => {
  const addReview = async () => {
    const data = await apolloClient.mutate<
      CreateProductReviewMutation,
      CreateProductReviewMutationVariables
    >({
      mutation: CreateProductReviewDocument,
      variables: {
        review: {
          headline: 'SUPERANCKO',
          name: 'Rafał',
          email: 'test@gmail.com',
          content: 'Super produkt, serio!',
          rating: 5,
        },
      },
    });
    console.log(data);
  };
  return (
    <Main>
      <button onClick={addReview}>Dodaj komentarz</button>
    </Main>
  );
};

export default Home;
