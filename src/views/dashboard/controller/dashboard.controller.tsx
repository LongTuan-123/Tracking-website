import { useState } from 'react';

export const useDashboardController = () => {
  const [orderFilter, setOrderFilter] = useState<string>('This week');
  const [customerFilter, setCustomerFilter] = useState<string>('This month');

  const orderData = [
    { label: 'All Orders', value: 64 },
    { label: 'Completed', value: 50 },
    { label: 'Failed', value: 2 }
  ];

  const customerData = [
    { label: 'Total Customers', value: 64 },
    { label: 'New Customers', value: 16 },
    { label: 'Scanned QR', value: 64 }
  ];

  const tripsData = [
    { label: 'Today', value: 64 },
    { label: 'Preparing', value: 5 },
    { label: 'Delivering', value: 15 },
    { label: 'Completed', value: 44 }
  ];

  const onDeliveryData = [
    { label: 'On-time', value: 64 },
    { label: 'Delayed', value: 5 },
    { label: 'Total Delay Time', value: '2000 mins' },
    { label: 'Avg. Delay', value: '180 mins' }
  ];

  const ordersDetail = [
  {
    label:'Order ID:',
    id: '0123456789',
    itemName: 'Cheese cake',
    modeOfDelivery: 'Air',
    progress: '85%',
  },
  {
    label:'Order ID:',
    id: '9876543210',
    itemName: 'Cheese cake',
    modeOfDelivery: 'Ground',
    progress: '60%',
  },
  {
    label:'Order ID:',
    id: '1928374650',
    itemName: 'Cheese cake',
    modeOfDelivery: 'Sea',
    progress: '95%',
  }
];

  
  return {
    onDeliveryData,
    tripsData,
    orderFilter,
    ordersDetail,
    customerFilter,
    orderData,
    customerData,
    setOrderFilter,
    setCustomerFilter,
  };
};
