import {
  ReviewContentFragment,
  useGetReviewsForProductSlugQuery,
} from '../../generated/graphql';
import { ProductReviewListItem } from './ProductReviewListItem';

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
    <ul className='w-full my-10'>
      {data.product.reviews.map((review) => (
        <ProductReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
