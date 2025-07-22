// // app/page.tsx
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function HomeRedirect() {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace('/login');
//   }, []);

//   return <div>Loading...</div>;
// }
export default function Home() {
  return (
    <h1 className="text-3xl text-red-500 font-bold underline">
      Hello world!
    </h1>
  )
}