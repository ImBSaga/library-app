// app/cart/page.tsx
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/container/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMe } from '@/hooks/useMe';

export default function MePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'profile';

  const { me, isLoadingMe, hasError: isMeError } = useMe();

  return (
    <>
      <Header />
      <main className='flex flex-col pt-20'>
        <Tabs
          value={tab}
          onValueChange={(value) => router.push(`/me?tab=${value}`)}
        >
          <TabsList>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
            <TabsTrigger value='borrowed-list'>Borrowed List</TabsTrigger>
            <TabsTrigger value='reviews'>Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value='profile'>
            {isLoadingMe ? (
              <p>Loading...</p>
            ) : (
              <>
                <p>name: {me?.profile?.name}</p>
                <p>email: {me?.profile?.email}</p>
              </>
            )}
          </TabsContent>
          <TabsContent value='borrowed-list'>
            <p>Borrowed List content</p>
          </TabsContent>
          <TabsContent value='reviews'>
            <p>Reviews content</p>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
