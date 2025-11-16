'use client';

import { useMe } from '@/hooks/useMe';

export default function ProfileTab() {
  const { me, isLoadingMe, hasError } = useMe();

  if (isLoadingMe) return <p>Loading profile...</p>;
  if (hasError || !me) return <p>Failed to load profile.</p>;

  return (
    <div className='space-y-2'>
      <p>name: {me?.profile?.name}</p>
      <p>email: {me?.profile?.email}</p>
    </div>
  );
}
