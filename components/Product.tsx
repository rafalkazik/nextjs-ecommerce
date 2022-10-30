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
      {/* <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <p>{data.description}</p>
      <Rating rating={data.rating} /> */}
      <Link href={'/'}>
        <a className='block'>
          <div className='flex justify-start'>
            <strong className='relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white'>
              New
            </strong>
          </div>

          <img
            alt='Trainer'
            src='https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
            className='-mt-3 h-[350px] w-full object-cover sm:h-[450px]'
          />

          <h3 className='mt-4 text-sm text-gray-700'>
            Limited Edition Sports Trainer
          </h3>

          <div className='mt-4 flex items-center justify-between font-medium'>
            <p>$189.99</p>

            <p className='text-xs uppercase tracking-wide'>6 Colors</p>
          </div>
        </a>
      </Link>
    </>
  );
};
