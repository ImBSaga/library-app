'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/container/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import ProfileTab from './partials/profile-tab';
import BorrowedListTab from './partials/borrowed-list-tab';

export default function MePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'profile';

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
            <ProfileTab />
          </TabsContent>
          <TabsContent value='borrowed-list'>
            <BorrowedListTab />
          </TabsContent>
          <TabsContent value='reviews'>
            <p>Reviews content</p>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
