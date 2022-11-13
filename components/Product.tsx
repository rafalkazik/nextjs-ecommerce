import Image from 'next/image';
import Link from 'next/link';
import { Rating } from './Rating';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <Image
        alt={`${data.thumbnailAlt}`}
        src={`${data.thumbnailUrl}`}
        width={16}
        height={9}
        layout='responsive'
        objectFit='contain'
        className=' h-[350px] w-full object-scale-down sm:h-[450px] rounded-t-md'
      />

      <h3 className='mt-4 text-sm text-gray-700 font-black'>{data.title}</h3>
      <p className='mt-4 text-sm text-gray-700'>{data.description}</p>

      <div className='mt-4 flex items-center justify-between font-medium'>
        <p>$189.99</p>

        <Rating rating={data.rating} />
      </div>
    </>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  'id' | 'title' | 'thumbnailUrl' | 'thumbnailAlt'
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Link href={`/products/item/${data.id}`}>
        <a className='block border-2 rounded-md h-full pb-2'>
          <div className='bg-white'>
            <Image
              alt={`${data.thumbnailAlt}`}
              src={`${data.thumbnailUrl}`}
              width={16}
              height={9}
              layout='responsive'
              objectFit='contain'
              className=' h-[350px] w-full object-cover sm:h-[450px] rounded-t-md'
            />
          </div>
          <h3 className='mt-4 text-sm text-gray-700 font-black'>
            {data.title}
          </h3>
        </a>
      </Link>
    </>
  );
};
