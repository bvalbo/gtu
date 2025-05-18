import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Container from '@/components/ui/Container';

// Dynamically import client components with no SSR
const ClientSideApp = dynamic(() => import('@/components/ClientApp'), {
  ssr: false,
});

// Simple loading component
function Loading() {
  return (
    <div className="min-h-screen bg-forest-900 flex items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-12 rounded-full bg-earth-700 mx-auto flex items-center justify-center text-white font-bold text-xl mb-4">
          GU
        </div>
        <h1 className="text-xl font-bold text-white">Grimstad Terrengultraløp</h1>
        <p className="text-earth-300 text-sm mt-1">Laster inn...</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ClientSideApp />
    </Suspense>
  );
}
