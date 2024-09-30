'use client'

import { useParams } from 'next/navigation'

import OrderMap from '../components/OrderMap'

const OrderRouteConfiguration = () => {
  const params = useParams<{ tag: string; item: string }>()

  console.log(params)

  return <>{<OrderMap />}</>
}

export default OrderRouteConfiguration
