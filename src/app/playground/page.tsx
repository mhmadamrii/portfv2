import Link from 'next/link';
import { Suspense } from 'react';

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
    </section>
  );
}
