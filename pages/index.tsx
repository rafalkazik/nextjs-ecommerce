import { Main } from '../components/Main';
import { NewsletterForm } from '../components/NewsletterForm';
import {
  CreateProductReviewDocument,
  CreateProductReviewMutation,
  CreateProductReviewMutationVariables,
  useCreateProductReviewMutation,
} from '../generated/graphql';
import { apolloClient } from '../graphql/apolloClient';

const Home = () => {
  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation();
  const addReview = () => {
    createReview({
      variables: {
        review: {
          headline: 'SUPERANCKOOOOOOOOOOOO18/01/23',
          name: 'Rafał',
          email: 'test@gmail.com',
          content: 'Super produkt, serio!',
          rating: 5,
        },
      },
    });
  };

  return (
    <Main>
      {/* <button onClick={addReview}>Dodaj komentarz</button> */}
      <NewsletterForm />
    </Main>
  );
};

export default Home;
