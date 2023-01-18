import { ProductReviewForm } from './ProductReviewForm';
import { ProductReviewList } from './ProductReviewList';

interface ProductReviewContainerProps {
  productSlug: string;
}

export const ProductReviewContainer = ({
  productSlug,
}: ProductReviewContainerProps) => {
  return (
    <div className='w-full'>
      <ProductReviewForm productSlug={productSlug} />
      <ProductReviewList productSlug={productSlug} />
    </div>
  );
};
