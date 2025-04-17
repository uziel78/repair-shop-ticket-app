import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className='px-2 w-full'>
      <div className='mx-auto py-4 flex flex-col justify-center items-center gap-4'>
        <h2>Page Not Found</h2>
        <Image
          className='m-0 rounded-xl'
          src='/images/not-found-1024x1024.png'
          alt='Page Not Found'
          width={300}
          height={300}
          sizes='300px'
          priority={true}
          title='Page Not Found'
        />
      </div>
      <div className='mx-auto text-center'>
        <Link className='font-bold' href='/home'>
          - Return Home -
        </Link>
      </div>
    </div>
  );
}
