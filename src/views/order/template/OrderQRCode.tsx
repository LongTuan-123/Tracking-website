'use client'
import React from 'react'
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, 
  TimelineDot, TimelineOppositeContent 
} from '@mui/lab'
import { Grid, Button, Divider, Typography, Box } from '@mui/material'

import HomeAddress from '../../../@core/svg/HomeAddress.svg'
import Boat from '../../../@core/svg/Boat.svg'
import Truck from '../../../@core/svg/Truck.svg'
import Airplane from '../../../@core/svg/AirPlane.svg'
import { useOrderController } from '../controllers/qrcode.controller'

const OrderManagementQRCode = () => {
  const {
    orderInfo,
    deliveryData,
    customerInfo,  
    journeyInfo,   
    handleGenerateQRCode,
    handleSendQRCode,
    handleCancel
  } = useOrderController()

  const renderModeIcon = (mode:string) => {
    switch (mode) {
      case 'Air': return <Airplane className="w-5 h-5 mr-1 text-blue" />
      case 'Ocean': return <Boat className="w-5 h-5 mr-1 text-blue" />
      case 'Truck': return <Truck className="w-5 h-5 mr-1 text-blue" />
      default: return null
    }
  }

  return (
    <Box className="container mx-auto p-4">
      <Typography variant="h3" className="mb-6 font-semibold">QR Code</Typography>

      {/* Main Layout */}
      <Grid container spacing={4}>
        
      <Grid item xs={12} md={6}>
        <Box className="p-6 bg-white rounded-lg shadow-md h-[459px]">
          {/* Flex container for Order ID and Creation Date */}
          <Box className="flex justify-between items-center">
            <Typography variant="h4" className="font-bold">
              Order ID: <span className="font-normal">{orderInfo[0].value}</span>
            </Typography>
            <Typography variant="h5" className="font-bold">
              Creation Date: <span className="font-normal">{orderInfo[1].value}</span>
            </Typography>
          </Box>

          {/* Rest of the fields */}
          {orderInfo.slice(2).map((field, index) => (
            <Typography key={index} variant="h5" className="mt-4 font-bold">
              {field.label}: <span className="font-normal">{field.value}</span>
            </Typography>
          ))}
        </Box>
      </Grid>


        {/* Right Side: QR Code */}
        <Grid item xs={12} md={6}>
          <Box className="p-6 bg-white rounded-lg shadow-md text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="QR Code"
              className="mx-auto w-[280px] h-[280px]"
            />
            <Box className="flex justify-center mt-4">
              <Button variant="outlined" color="primary" size="large" className="mr-4" onClick={handleGenerateQRCode}>
                Generate QR code
              </Button>
              <Button variant="contained" color="primary" size="large" onClick={handleSendQRCode}>
                Send QR code
              </Button>
            </Box>
            <Button variant="outlined" color="primary" size="large" className="mt-6" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Route Details Section */}
      <Box className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <Box className="inline-flex items-center mb-6">
          <Typography variant="h4" className="font-bold mr-2">Route detail:</Typography>
          <Typography variant="h4">DHL Group</Typography>
        </Box>

        <Grid container spacing={4}>
          
          {/* Left Section: Customer Info */}
          <Grid item xs={12} md={2.5}>
            <Box className="bg-white rounded-lg p-4">
              {/* Map through the customerInfo array */}
              {customerInfo.map((field, index) => (
                <Typography key={index} variant="h5" className="font-bold mb-2">
                  {field.label}: <span className="font-normal">{field.value}</span>
                </Typography>
              ))}
            </Box>
          </Grid>

          <Divider orientation="vertical" flexItem className="mx-4" />

          {/* Middle Section: Address and Mode of Delivery */}
          <Grid item xs={12} md={7} container>
            <Grid item xs={7}>
              <Timeline position="left">
                {deliveryData.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent>
                      <Box className="text-lg">
                        <strong>{item.type}</strong><br />{item.address}
                      </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      {/* Always show the home icon in the TimelineDot */}
                      <TimelineDot color='grey'>
                        <HomeAddress className="w-5 h-5 text-black" />
                      </TimelineDot>
                      {index < deliveryData.length - 1 && <TimelineConnector className="text-black" />}
                    </TimelineSeparator>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>

            {/* Mode of delivery */}
            <Grid item xs>
              <Box className="ml-4 mt-1">
                {deliveryData.map((item, index) => (
                  <Box key={index} className="flex items-center mb-12">
                    {item.mode && (
                      <>
                        <Typography variant="h5" className="text-gray-600 mr-2">Mode of Transportation:</Typography>
                        {renderModeIcon(item.mode)}
                        <Typography variant="h5" className="text-blue-600 font-bold leading-tight">
                          {item.mode}
                        </Typography>
                      </>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Divider orientation="vertical" flexItem className="mx-4" />

          {/* Right Section: Estimated Time and Price (Journey Info) */}
          <Grid item xs={3} md={1.6}>
            <Box className="text-center bg-white rounded-lg">
              {/* Map through the journeyInfo array */}
              {journeyInfo.map((field, index) => (
                <Typography key={index} variant="h5" className="font-bold mb-2">
                  {field.label}: <span className="font-normal">{field.value}</span>
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default OrderManagementQRCode;
