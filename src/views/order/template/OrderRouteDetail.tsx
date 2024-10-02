'use client'
import React from 'react'

import { Button, Divider, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { useOrderController } from '../controllers/qrcode.controller.controller'
import AddressTimeline from '../components/AddressTimeline'
import ModeOfDelivery from '../components/ModeDelivery'
import JourneyInfo from '../components/JourneyInfo'

const OrderManagementQRCode = () => {
  const {
    deliveryData,
    journeyInfo,
    handleGenerateQRCode,
    handleSendQRCode,
    handleCancel
  } = useOrderController()

  return (
    <Box className="container mx-auto p-4">
      <Typography variant="h3" className="mb-6 font-semibold">Configure route (Order ID: 012345678)</Typography>


      <Grid container spacing={2}>
        <Grid size={12}>
          <Box className="p-6 bg-white rounded-lg shadow-md h-[459px]">
                <img alt = 'Background cua KIKI' />
           </Box>
        </Grid>
      </Grid>


      <Box className="mt-4 p-6 bg-white rounded-lg shadow-md">
        <Box className="inline-flex items-center mb-6">
          <Typography variant="h4" className="font-bold mr-2">Route detail:</Typography>
          <Typography variant="h4">DHL Group</Typography>
        </Box>

        <Grid container spacing={2}>
             <Grid container size={6.7} alignItems="center">
            <Grid size={6.5}>
              <AddressTimeline deliveryData={deliveryData} />
            </Grid>

           <Grid size={5.5}>
              <ModeOfDelivery deliveryData={deliveryData} />
            </Grid>
          </Grid>

          <Divider orientation="vertical" flexItem className="mx-4" /> 

          <Grid size={1.5}>
              <JourneyInfo journeyInfo={journeyInfo} />
          </Grid>

        <Divider orientation="vertical" flexItem className="mx-4" /> 

          <Grid size={2.8}>
            <Box className="flex justify-center items-center mt-4">

              <Button variant="contained" color="primary" size="large" className="mr-4" onClick={handleGenerateQRCode}>
                Generate QR code
              </Button>
            </Box>
            <Box className="flex flex-col justify-center items-center mt-4">
             <Button variant="contained" color="primary" size="large" className="mr-4" onClick={handleGenerateQRCode}>
                Generate QR code
              </Button>
             <Button variant="contained" color="primary" size="large" className="mr-4" onClick={handleGenerateQRCode}>
                Generate QR code
              </Button>
            </Box>
          </Grid>

         
        </Grid>
      </Box>
    </Box>
  )
}

export default OrderManagementQRCode;
