import React from 'react';

import { Box, Button, Typography, Divider, Grid } from '@mui/material';

import AddressTimeline from '../components/AddressTimeline';
import ModeOfDelivery from '../components/ModeDelivery';
import JourneyInfo from '../components/JourneyInfo';



const OrderRouteDetail = () => {

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


  const journeyInfo = [
    { label: 'Estimated Time', value: '3 days 10 hours' },
    { label: 'Price (USD)', value: '30,000' }
  ];
  
  return (
    <Box className="container mx-auto p-4">
      <Typography variant="h3" className="mb-6 font-semibold">
        Configure Route (Order ID: {orderInfo[0].value})
      </Typography>

      {/* Main Layout */}
      <Grid container spacing={2}>
        {/* Left: Map Section */}
        <Grid item xs={12} md={6}>
          <Box className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="/path-to-your-map-image.png"
              alt="Route Map"
              className="w-full h-[400px] object-cover"
            />
          </Box>
        </Grid>

        {/* Right: Route Detail Section */}
        <Grid item xs={12} md={6}>
          <Box className="p-6 bg-white rounded-lg shadow-md">
            <Typography variant="h4" className="font-bold">
              Route detail: <span className="font-normal">DHL Group</span>
            </Typography>
            <Divider className="my-4" />

            {/* Route Information */}
            <AddressTimeline deliveryData={deliveryData} />

            {/* Mode of Delivery */}
            <Box className="mt-4">
              <ModeOfDelivery deliveryData={deliveryData} />
            </Box>

            {/* Journey Info */}
            <Box className="mt-4">
              <JourneyInfo journeyInfo={journeyInfo} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Buttons */}
      <Box className="mt-6 flex justify-end space-x-4">
        <Button variant="contained" color="primary">
          Select
        </Button>
        <Button variant="outlined" color="primary">
          Request Change
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default OrderRouteDetail;
