import React, { useState, useEffect } from 'react';

export const useOrderController = () => {
  const [orderInfo, setOrderInfo] = useState({
    orderId: '00000123456',
    creationDate: '09/08/2024',
    product: {
      name: 'Cheese Cake',
      ingredients: [
        'Unsweetened chocolate', 'pecans', 'sunflower seed', 'cocoa powder',
        'lima bean', 'brandy', 'vegemite', 'sorghum', 'muffin', 'water'
      ],
      productionDate: '09/06/2024',
      expirationDate: '09/06/2026'
    }
  });

  const [deliveryData, setDeliveryData] = useState([
    { type: 'Starting address', address: '114 S Columbus St', mode: 'Air' },
    { type: 'Station 1', address: 'Rd. Santa Ana, Illinois 85486', mode: 'Ocean' },
    { type: 'Station 2', address: 'Rd. Santa Ana, Illinois 85486', mode: 'Truck' },
    { type: 'Delivery address', address: '7604 Denton Hwy #200', mode: null }
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    name: 'Company A',
    phoneNumber: '0123456789',
    journey: {
      departure: '114 S Columbus St, Sunbury, Ohio',
      arrival: '7604 Denton Hwy #200',
      estimatedTime: '3 days 10 hours'
    },
    priceUSD: '30,000'
  });


  const handleGenerateQRCode = () => {
  
    console.log('Generating QR code...');

  };

  const handleSendQRCode = () => {
 
    console.log('Sending QR code...');

  };

  const handleCancel = () => {
    setCustomerInfo()
    setDeliveryData()
    setOrderInfo()
    console.log('Canceling...');

  };

 
  return {
    orderInfo,
    deliveryData,
    customerInfo,
    handleGenerateQRCode,
    handleSendQRCode,
    handleCancel
  };
};
