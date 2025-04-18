import Button from '@/components/custom-ui/Button/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='pt-10 flex items-center justify-center'>
      <Link href='/login'>
        <Button>اذهب</Button>
      </Link>
    </div>
  );
}
