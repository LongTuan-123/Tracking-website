
export const useOrderController = () => {

 const orderInfo = [
    { label: 'Order ID', value: '00000123456' },
    { label: 'Creation Date', value: '09/08/2024' },
    { label: 'Product Name', value: 'Cheese Cake' },
    {
      label: 'Ingredients',
      value: [
        'Unsweetened chocolate',
        'pecans',
        'sunflower seed',
        'cocoa powder',
        'lima bean',
        'brandy',
        'vegemite',
        'sorghum',
        'muffin',
        'water' 
      ].join(', ')
    },
    { label: 'Production Date', value: '09/06/2024' },
    { label: 'Expiration Date', value: '09/06/2026' }
  ];

  const deliveryData = [
    { type: 'Starting address', address: '114 S Columbus St', mode: 'Air' },
    { type: 'Station 1', address: 'Rd. Santa Ana, Illinois 85486', mode: 'Ocean' },
    { type: 'Station 2', address: 'Rd. Santa Ana, Illinois 85486', mode: 'Truck' },
    { type: 'Delivery address', address: '7604 Denton Hwy #200', mode: null }
  ];


  const customerInfo = [
    { label: 'Customer Name', value: 'Company A' },
    { label: 'Phone Number', value: '0123456789' },
    { label: 'Departure', value: '114 S Columbus St, Sunbury, Ohio' },
    { label: 'Arrival', value: '7604 Denton Hwy #200' },
  ];

  const journeyInfo = [
    { label: 'Estimated Time', value: '3 days 10 hours' },
    { label: 'Price (USD)', value: '30,000' }
  ];

  const handleGenerateQRCode = () => {
    console.log('Generating QR code...');
  };

  const handleSendQRCode = () => {
    console.log('Sending QR code...');
  };

  const handleCancel = () => {
    console.log('Canceling...');
  };

  return {
    orderInfo,
    deliveryData,
    customerInfo,
    journeyInfo,
    handleGenerateQRCode,
    handleSendQRCode,
    handleCancel
  };
};
