'use client'

import { useParams } from 'next/navigation'

import OrderMap from '../components/OrderMap'
import OrderRouteOverview from '../components/OrderRouteOverview'

const OrderRouteConfiguration = () => {
  const params = useParams<{ tag: string; item: string }>()

  console.log(params)

  return (
    <div className='relative'>
      <div className='w-full min-h-[600px] '>
        <OrderMap />
      </div>
      <div className='absolute bottom-2 w-[96%] left-[2%] bg-white rounded-t-lg'>
        <OrderRouteOverview />
      </div>
    </div>
  )
}

export default OrderRouteConfiguration
