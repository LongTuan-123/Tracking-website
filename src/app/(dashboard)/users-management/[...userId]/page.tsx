'use client'

import { useParams } from 'next/navigation'

import { DetailUser } from '@/views/users-management/detail'

export default function UserDetailPage() {
  const params = useParams<{ userId: string }>()

  return (
    <>
      <h1 className='mb-6'>User #{params.userId}</h1>
      <DetailUser userId={params.userId} />
    </>
  )
}
