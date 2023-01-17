import { ReviewContentFragment } from '../../generated/graphql';

interface ProductReviewItemProps {
  review: ReviewContentFragment;
}

export const ProductReviewListItem = ({ review }: ProductReviewItemProps) => {
  return (
    <li className='border mt-4 bg-white p-2 max-w-md mx-auto shadow-md'>
      <h3>{review.headline}</h3>
      <p>{review.content}</p>
      <div>{review.rating}</div>
      <footer>{review.name}</footer>
    </li>
  );
};
