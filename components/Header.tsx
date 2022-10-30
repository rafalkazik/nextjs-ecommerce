import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export const Header = () => {
  const router = useRouter();
  const currentLink = router.pathname.slice(1);

  return (
    // <header className='mx-auto w-full '>
    //   <nav className='bg-gray-300 px-4 py-2 flex flex-col'>
    //     <Link href='/'>
    //       <a className={currentLink === '' ? 'text-lime-100' : ''}>Home</a>
    //     </Link>
    //     <Link href='/about'>
    //       <a className={currentLink === 'about' ? 'text-lime-100' : ''}>
    //         About
    //       </a>
    //     </Link>
    //   </nav>
    // </header>

    <header aria-label='Site Header' className='border-b border-gray-100'>
      <div className='mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <button type='button' className='p-2 sm:mr-4 lg:hidden'>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <Link href='/'>
            <a className='flex'>
              <span className='sr-only'>Logo</span>
              <span className='inline-block h-10 w-32 rounded-lg bg-gray-200'></span>
            </a>
          </Link>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <nav
            aria-label='Site Nav'
            className='hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500'
          >
            <Link href='/about'>
              <a
                className={classNames(
                  'block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700',
                  {
                    'block h-16 border-b-4 border-current leading-[4rem] text-red-700':
                      currentLink === 'about',
                  }
                )}
              >
                About
              </a>
            </Link>

            <Link href='/news'>
              <a className='block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'>
                News
              </a>
            </Link>

            <Link href='/products'>
              <a className='block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'>
                Products
              </a>
            </Link>

            <Link href='/contact'>
              <a
                href='/contact'
                className='block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'
              >
                Contact
              </a>
            </Link>
          </nav>

          <div className='ml-8 flex items-center'>
            <div className='flex items-center divide-x divide-gray-100 border-x border-gray-100'>
              <span>
                <a
                  href='/cart'
                  className='block border-b-4 border-transparent p-6 hover:border-red-700'
                >
                  <svg
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>

                  <span className='sr-only'>Cart</span>
                </a>
              </span>

              <span>
                <Link href='/account'>
                  <a
                    href='/account'
                    className='block border-b-4 border-transparent p-6 hover:border-red-700'
                  >
                    <svg
                      className='h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>

                    <span className='sr-only'> Account </span>
                  </a>
                </Link>
              </span>

              <span className='hidden sm:block'>
                <Link href='/search'>
                  <a
                    href='/search'
                    className='block border-b-4 border-transparent p-6 hover:border-red-700'
                  >
                    <svg
                      className='h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>

                    <span className='sr-only'> Search </span>
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
