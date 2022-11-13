import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 mt-8'>
      {children}
    </main>
  );
};
