export const useOrderController = () => {
  const orderInfo = [
    { id: 'order-1', label: 'Order ID', value: '00000123456' },
    { id: 'order-2', label: 'Creation Date', value: '09/08/2024' },
    { id: 'order-3', label: 'Product Name', value: 'Cheese Cake' },
    {
      id: 'order-4',
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
    { id: 'order-5', label: 'Production Date', value: '09/06/2024' },
    { id: 'order-6', label: 'Expiration Date', value: '09/06/2026' }
  ]

  const deliveryData = [
    { id: 'delivery-1', type: 'Starting address', address: '114 S Columbus St', mode: 'Air' },
    { id: 'delivery-2', type: 'Station 1', address: 'Rd. Santa Ana, Illinois 85486', mode: 'Ocean' },
    { id: 'delivery-3', type: 'Station 2', address: 'Rd. Santa Ana, Illinois 85486', mode: 'Truck' },
    { id: 'delivery-4', type: 'Delivery address', address: '7604 Denton Hwy #200', mode: null }
  ]

  const customerInfo = [
    { id: 'customer-1', label: 'Customer Name', value: 'Company A' },
    { id: 'customer-2', label: 'Phone Number', value: '0123456789' },
    { id: 'customer-3', label: 'Departure', value: '114 S Columbus St, Sunbury, Ohio' },
    { id: 'customer-4', label: 'Arrival', value: '7604 Denton Hwy #200' }
  ]

  const journeyInfo = [
    { id: 'journey-1', label: 'Estimated Time', value: '3 days 10 hours' },
    { id: 'journey-2', label: 'Price (USD)', value: '30,000' }
  ]

  const handleGenerateQRCode = () => {
    console.log('Generating QR code...')
  }

  const handleSendQRCode = () => {
    console.log('Sending QR code...')
  }

  const handleCancel = () => {
    console.log('Canceling...')
  }

  return {
    orderInfo,
    deliveryData,
    customerInfo,
    journeyInfo,
    handleGenerateQRCode,
    handleSendQRCode,
    handleCancel
  }
}
