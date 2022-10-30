import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className=' mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4'>
      {children}
    </main>
  );
};
