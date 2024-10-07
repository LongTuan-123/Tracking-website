'use client'
import React from 'react'

import { Button, Divider, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { useOrderController } from '../controllers/qrcode.controller'
import AddressTimeline from '../components/AddressTimeline'
import ModeOfDelivery from '../components/ModeDelivery'
import JourneyInfo from '../components/JourneyInfo'

const OrderManagementQRCode = () => {
  const { orderInfo, deliveryData, customerInfo, journeyInfo, handleGenerateQRCode, handleSendQRCode, handleCancel } =
    useOrderController()

  return (
    <Box className='container mx-auto p-4'>
      <Typography variant='h3' className='mb-6 font-semibold'>
        QR Code
      </Typography>

      <Grid container spacing={2}>
        <Grid size={6}>
          <Box className='p-6 bg-white rounded-lg shadow-md h-[459px]'>
            <Box className='flex justify-between items-center'>
              <Typography variant='h4' className='font-bold'>
                Order ID: <span className='font-normal'>{orderInfo[0].value}</span>
              </Typography>
              <Typography variant='h5' className='font-bold'>
                Creation Date: <span className='font-normal'>{orderInfo[1].value}</span>
              </Typography>
            </Box>
            {orderInfo.slice(2).map((field) => (
              <Typography key={field.id} variant='h5' className='mt-4 font-bold'>
                {field.label}: <span className='font-normal'>{field.value}</span>
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid size={6}>
          <Box className='p-6 bg-white rounded-lg shadow-md text-center'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png'
              alt='QR Code'
              className='mx-auto w-[280px] h-[280px]'
            />
            <Box className='flex justify-center mt-5'>
              <Button variant='outlined' color='primary' size='medium' className='mr-4' onClick={handleGenerateQRCode}>
                Generate QR code
              </Button>
              <Button variant='contained' color='primary' size='medium' onClick={handleSendQRCode}>
                Send QR code
              </Button>
            </Box>
            <Button variant='outlined' color='primary' size='medium' className='mt-6' onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box className='mt-4 p-6 bg-white rounded-lg shadow-md'>
        <Box className='inline-flex items-center mb-6'>
          <Typography variant='h4' className='font-bold mr-2'>
            Route detail:
          </Typography>
          <Typography variant='h4'>DHL Group</Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={2.8}>
            <Box className='bg-white rounded-lg p-2'>
              {customerInfo.map((field) => (
                <Typography key={field.id} variant='h5' className='font-bold mb-2'>
                  {field.label}: <span className='font-normal'>{field.value}</span>
                </Typography>
              ))}
            </Box>
          </Grid>

          <Divider orientation='vertical' flexItem className='mx-4' />

          <Grid container size={6.7} alignItems='center'>
            <Grid size={6.5}>
              <AddressTimeline deliveryData={deliveryData} />
            </Grid>

            <Grid size={5.5}>
              <ModeOfDelivery deliveryData={deliveryData} />
            </Grid>
          </Grid>

          <Divider orientation='vertical' flexItem className='mx-4' />

          <Grid size={1.5}>
            <JourneyInfo journeyInfo={journeyInfo} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default OrderManagementQRCode
