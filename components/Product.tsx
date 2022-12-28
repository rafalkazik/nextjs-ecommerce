import Image from 'next/image';
import Link from 'next/link';
import { Rating } from './Rating';
import { NextSeo } from 'next-seo';
import ContentReactMarkdown from './ContentReactMarkdown';
import { useCartState } from './Cart/CartBar';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: string;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://nextjs-ecommerce-rafalkazik.vercel.app/products/item/${data.id}`}
        openGraph={{
          url: `https://nextjs-ecommerce-rafalkazik.vercel.app/products/item/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: 'image/jpeg',
            },
          ],
          siteName: 'NextJS ecommerce',
        }}
      />
      <Image
        alt={`${data.thumbnailAlt}`}
        src={`${data.thumbnailUrl}`}
        width={16}
        height={9}
        layout='responsive'
        objectFit='contain'
        className=' h-[350px] w-full object-scale-down sm:h-[450px] rounded-t-md'
      />

      <h3 className='mt-4 text-sm text-gray-700 font-black p-4'>
        {data.title}
      </h3>
      <p className='mt-4 text-sm text-gray-700 p-4'>{data.description}</p>
      <article className='prose lg:prose-xl p-4'>
        <ContentReactMarkdown>{data.longDescription}</ContentReactMarkdown>
      </article>
      <div className='mt-4 flex items-center justify-between font-medium'>
        <p className='p-4'>$189.99</p>

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
  const cartState = useCartState();

  return (
    <div className='block border-2 rounded-md h-full pb-2'>
      <Link href={`/products/item/${data.id}`}>
        <a className='block'>
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
      <button
        onClick={() => {
          cartState.addItemToCart({
            price: 20,
            title: data.title,
          });
        }}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
      >
        Dodaj do koszyka
      </button>
    </div>
  );
};
