import {
  ReviewContentFragment,
  useGetReviewsForProductSlugQuery,
} from '../generated/graphql';

interface ProductReviewListProps {
  productSlug: string;
}

export const ProductReviewList = ({ productSlug }: ProductReviewListProps) => {
  const { data, loading, error } = useGetReviewsForProductSlugQuery({
    variables: {
      slug: productSlug,
    },
  });
  if (!data?.product) {
    return null;
  }
  return (
    <ul>
      {data.product.reviews.map((review) => (
        <ProductReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

interface ProductReviewItemProps {
  review: ReviewContentFragment;
}

const ProductReviewItem = ({ review }: ProductReviewItemProps) => {
  return (
    <li>
      <h3>{review.headline}</h3>
      <p>{review.content}</p>
      <div>{review.rating}</div>
      <footer>{review.name}</footer>
    </li>
  );
};
