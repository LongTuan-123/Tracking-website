'use client'
import React from 'react'

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'

import { Grid, Button, Divider } from '@mui/material'

const orderInfo = {
  orderId: {
    label: 'Order ID:',
    value: '00000123456'
  },
  creationDate: {
    label: 'Creation Date:',
    value: '09/08/2024'
  },
  product: {
    name: {
      label: 'Product Name:',
      value: 'Cheese Cake'
    },
    ingredients: {
      label: 'Ingredients:',
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
      ]
    },
    productionDate: {
      label: 'Production Date:',
      value: '09/06/2024'
    },
    expirationDate: {
      label: 'Expiration Date:',
      value: '09/06/2026'
    }
  }
}

const deliveryData = [
  {
    type: {
      label: 'Type:',
      value: 'Starting address'
    },
    address: {
      label: 'Address:',
      value: '114 S Columbus St'
    },
    mode: {
      label: 'Mode of Transportation:',
      value: 'Air',
      color: 'info'
    }
  },
  {
    type: {
      label: 'Type:',
      value: 'Station 1'
    },
    address: {
      label: 'Address:',
      value: 'Rd. Santa Ana, Illinois 85486'
    },
    mode: {
      label: 'Mode of Transportation:',
      value: 'Ocean',
      color: 'primary'
    }
  },
  {
    type: {
      label: 'Type:',
      value: 'Station 2'
    },
    address: {
      label: 'Address:',
      value: 'Rd. Santa Ana, Illinois 85486'
    },
    mode: {
      label: 'Mode of Transportation:',
      value: 'Truck',
      color: 'secondary'
    }
  },
  {
    type: {
      label: 'Type:',
      value: 'Delivery address'
    },
    address: {
      label: 'Address:',
      value: '7604 Denton Hwy #200'
    },
    mode: {
      label: null,
      value: null,
      color: null
    }
  }
]

const customerInfo = {
  name: {
    label: 'Customer Name:',
    value: 'Company A'
  },
  phoneNumber: {
    label: 'Phone Number:',
    value: '0123456789'
  },
  journey: {
    departure: {
      label: 'Departure:',
      value: '114 S Columbus St, Sunbury, Ohio'
    },
    arrival: {
      label: 'Arrival:',
      value: '7604 Denton Hwy #200'
    },
    estimatedTime: {
      label: 'Estimated time:',
      value: '3 days 10 hours'
    }
  },
  priceUSD: {
    label: 'Price (USD):',
    value: '30,000'
  }
}

const OrderManagementQRCode = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-6 text-3xl font-semibold'>QR Code</h1>

      {/* Main Layout */}
      <Grid container spacing={4} alignItems='flex-start'>
        {/* Left Side: Order Info */}
        <Grid item xs={12} md={6}>
          <div className='p-6 bg-white rounded-lg shadow-md h-[459px]'>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold'>
                {orderInfo.orderId.label} <span className='font-normal'>{orderInfo.orderId.value}</span>
              </h3>
              <p className='text-lg font-bold'>
                {orderInfo.creationDate.label} <span className='font-normal'>{orderInfo.creationDate.value}</span>
              </p>
            </div>

            <hr className='my-4' />

            <h3 className='text-xl font-bold'>
              {orderInfo.product.name.label} <span className='font-normal'>{orderInfo.product.name.value}</span>
            </h3>

            <p className='mt-4 font-bold'>
              {orderInfo.product.ingredients.label}{' '}
              <span className='font-normal'>{orderInfo.product.ingredients.value.join(', ')}</span>
            </p>

            <p className='mt-4 font-bold'>
              {orderInfo.product.productionDate.label}{' '}
              <span className='font-normal'>{orderInfo.product.productionDate.value}</span>
            </p>
            <p className='mt-4 font-bold'>
              {orderInfo.product.expirationDate.label}{' '}
              <span className='font-normal'>{orderInfo.product.expirationDate.value}</span>
            </p>
          </div>
        </Grid>

        {/* Right Side: QR Code */}
        <Grid item xs={12} md={6}>
          <div className='p-6 bg-white rounded-lg shadow-md text-center'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png'
              alt='QR Code'
              className='mx-auto w-[280px] h-[280px]'
            />
            <div className='flex justify-center mt-4'>
              <Button variant='outlined' color='primary' size='large' className='mr-4'>
                Generate QR code
              </Button>
              <Button variant='contained' color='primary' size='large'>
                Send QR code
              </Button>
            </div>
            <Button variant='outlined' color='primary' size='large' className='mt-6'>
              Cancel
            </Button>
          </div>
        </Grid>
      </Grid>

      {/* Route Details Section */}
      <div className='mt-6 p-6 bg-white rounded-lg shadow-md'>
        <div className='inline-flex items-center mb-6'>
          <h5 className='text-xl font-bold mr-2'>Route detail:</h5>
          <h5 className='text-xl'>DHL Group</h5>
        </div>

        {/* Route Information */}
        <Grid container spacing={4}>
          {/* Left Section: Customer Info */}
          <Grid item xs={12} md={3}>
            <div className='bg-white rounded-lg p-4'>
              <p className='font-bold'>
                {customerInfo.name.label} <span className='font-normal'>{customerInfo.name.value}</span>
              </p>
              <p className='font-bold'>
                {customerInfo.phoneNumber.label} <span className='font-normal'>{customerInfo.phoneNumber.value}</span>
              </p>
              <p className='font-bold'>
                {customerInfo.journey.departure.label}{' '}
                <span className='font-normal'>{customerInfo.journey.departure.value}</span>
              </p>
              <p className='font-bold'>
                {customerInfo.journey.arrival.label}{' '}
                <span className='font-normal'>{customerInfo.journey.arrival.value}</span>
              </p>
            </div>
          </Grid>

          {/* First Vertical Divider */}
          <Divider orientation='vertical' flexItem sx={{ mx: 2 }} />

          {/* Middle Section: Address and Mode of Delivery (using Timeline) */}
          <Grid item xs={12} md={7} container>
            {/* Timeline on the far left */}
            <Grid item>
              <Timeline position='left'>
                {deliveryData.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent>
                      <div>
                        <strong>{item.type.value}</strong>
                        <br />
                        {item.address.value}
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color={item.mode.color || 'grey'}>
                        {/* You can customize the icon based on the mode value */}
                        <img
                          src='https://icons.veryicon.com/png/o/miscellaneous/zhiutech-icon/house-34.png'
                          alt='icon'
                          style={{ width: '24px', height: '24px' }}
                        />
                      </TimelineDot>
                      {index < deliveryData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
            {/* Mode of delivery*/}
            <Grid item xs>
              <div className='ml-20 mt-1'>
                {deliveryData.map((item, index) => (
                  <div key={index} className='flex items-center mb-12'>
                    <div className='flex items-center'>
                      <span className='text-gray-600 mr-2'>{item.mode.label}</span>
                      {item.mode.value ? (
                        <div className='flex items-center'>
                          <img src={`/${item.mode.value.toLowerCase()}.png`} alt='icon' className='w-5 h-5 mr-1' />
                          <span className={`text-${item.mode.color}-600 font-medium leading-tight`}>
                            {item.mode.value}
                          </span>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>

          {/* Second Vertical Divider */}
          <Divider orientation='vertical' flexItem sx={{ mx: 2 }} />

          {/* Right Section: Estimated Time and Price */}
          <Grid item xs={3} md={1.6}>
            <div className='text-center bg-white rounded-lg'>
              <p className='text-sm font-bold'>
                {customerInfo.journey.estimatedTime.label}
                <br />
                <span className='font-normal'>{customerInfo.journey.estimatedTime.value}</span>
              </p>
              <p className='text-sm font-bold'>
                {customerInfo.priceUSD.label}
                <br />
                <span className='font-normal'>{customerInfo.priceUSD.value}</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default OrderManagementQRCode
