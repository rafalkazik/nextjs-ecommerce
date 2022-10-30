import Link from 'next/link';
import { Rating } from './Rating';

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <>
      <Link href={'/'}>
        <a className='block'>
          <div className='flex justify-start'>
            <strong className='relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white'>
              New
            </strong>
          </div>

          <img
            alt={`${data.thumbnailAlt}`}
            src={`${data.thumbnailUrl}`}
            className='-mt-3 h-[350px] w-full object-cover sm:h-[450px]'
          />

          <h3 className='mt-4 text-sm text-gray-700'>{data.description}</h3>

          <div className='mt-4 flex items-center justify-between font-medium'>
            <p>$189.99</p>

            <p className='text-xs uppercase tracking-wide'>{data.rating}</p>
          </div>
        </a>
      </Link>
    </>
  );
};
