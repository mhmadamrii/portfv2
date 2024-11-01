import Link from 'next/link';
import { Suspense } from 'react';
import FlickeringGrid from '~/components/ui/flickering-grid';

export default async function Playground({
  searchParams,
}: {
  searchParams: {
    id: string | undefined;
  };
}) {
  const { id } = await searchParams;
  return (
    <>
      <Link href="/" className="block">
        Home with id: {id}
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <PlaygroundWithData />
      </Suspense>
    </>
  );
}

export async function PlaygroundWithData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10',
  );
  const data = await res.json();
  console.log('data fetched', data);
  await new Promise(res => setTimeout(res, 2000));

  return (
    <section>
      {data?.map((item: { id: string; title: string }) => (
        <div key={item?.id}>
          <p>{item.title}</p>
        </div>
      ))}
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
    </section>
  );
}
