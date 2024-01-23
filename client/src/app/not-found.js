import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='my-10 flex min-h-screen flex-col items-center justify-start md:my-0 md:justify-center'>
      <Image
        src={'https://i.postimg.cc/P5hbc9yc/error.png'}
        alt='404'
        width={1080}
        height={720}
      />
      <Link href='/' className='rounded-md bg-green-500 px-3 py-2 text-white'>
        Return Home
      </Link>
    </div>
  );
}
