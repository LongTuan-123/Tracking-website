import { useState } from 'react';

import Boat from '@svg/Boat.svg'

import Airplane from '@svg/AirPlane.svg'

import Truck from '@svg/Truck.svg'

export const useDashboardController = () => {
  const [orderFilter, setOrderFilter] = useState<string>('This week');
  const [customerFilter, setCustomerFilter] = useState<string>('This month');

  const renderModeIcon = (mode:string) => {
    switch (mode) {
      case 'Air': return <Airplane className="w-5 h-5 mr-1 text-blue" />
      case 'Ocean': return <Boat className="w-5 h-5 mr-1 text-blue" />
      case 'Truck': return <Truck className="w-5 h-5 mr-1 text-blue" />
      default: return null
    }
  }

const customerOrderData = [
  { section: 'Orders', data: [
    { id: 1, label: 'All Orders', value: 64 },
    { id: 2, label: 'Completed', value: 50 },
    { id: 3, label: 'Failed', value: 2 }
  ]},
  { section: 'Customers', data: [
    { id: 4, label: 'Total Customers', value: 64 },
    { id: 5, label: 'New Customers', value: 16 },
    { id: 6, label: 'Scanned QR', value: 64 }
  ]}
];

 const TripDeliveryData = [
  { section: 'Trips', data: [
    { id: 1, label: 'Today', value: 64 },
    { id: 2, label: 'Preparing', value: 5 },
    { id: 3, label: 'Delivering', value: 15 },
    { id: 4, label: 'Completed', value: 44 }
  ]},
  { section: 'On Delivery', data: [
    { id: 5, label: 'On-time', value: 64 },
    { id: 6, label: 'Delayed', value: 5 },
    { id: 7, label: 'Total Delay Time', value: '2000 mins' },
    { id: 8, label: 'Avg. Delay', value: '180 mins' }
  ]}
];

  const ordersDetail = [
  {
    label:'Order ID:',
    id: '0123456789',
    itemName: 'Cheese cake',
    type:'Air',
    mode: 'Air',
    progress: '85%',
  },
  {
    label:'Order ID:',
    id: '9876543210',
    itemName: 'Cheese cake',
    type:'Truck',
    mode: 'Truck',
    progress: '60%',
  },
  {
    label:'Order ID:',
    id: '1928374650',
    itemName: 'Cheese cake',
    type:'Ocean',
    mode: 'Ocean',
    progress: '95%',
  }
];


  return {
    TripDeliveryData,
    orderFilter,
    ordersDetail,
    customerFilter,
    customerOrderData,
    setOrderFilter,
    setCustomerFilter,
    renderModeIcon,
  };
};
