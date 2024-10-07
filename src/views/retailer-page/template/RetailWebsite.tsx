import React from 'react'

import Link from 'next/link'

import { Box, Typography, InputBase, IconButton, Button, TextField, Divider } from '@mui/material'

const rightSideLinks = [
  { id: '1', label: 'Find a Store', href: '/' },
  { id: '2', label: 'Track the order', href: '/' },
  { id: '3', label: 'Join Us', href: '/' },
  { id: '4', label: 'Sign In', href: '/' }
]

const navigationLabels = [
  { id: '1', label: 'Label', href: '/' },
  { id: '2', label: 'Label', href: '/' },
  { id: '3', label: 'Label', href: '/' },
  { id: '4', label: 'Label', href: '/' },
  { id: '5', label: 'Label', href: '/' },
  { id: '6', label: 'Label', href: '/' }
]

const RetailWebsite = () => {
  return (
    <Box
      className='min-h-screen w-full bg-white flex justify-center items-center'
      sx={{ height: '1024px', width: '1440px' }}
    >
      <Box className='w-full h-full bg-white p-4'>
        {/* First Header Layer */}
        <Box className='flex justify-between items-center mb-2'>
          <Typography variant='body2' className='text-gray-500'>
            Hotline: <strong>01234567891</strong>
          </Typography>

          {/* Right-side Links */}
          <Box className='flex gap-4'>
            {rightSideLinks.map((link) => (
              <React.Fragment key={link.id}>
                {link.id !== '1' && <Divider orientation='vertical' flexItem className='mx' />}
                <Link href={link.href}>
                  <Typography
                    variant='body2'
                    className={`cursor-pointer ${link.label === 'Track the order' ? 'text-blue-600' : 'text-gray-500'}`}
                  >
                    {link.label}
                  </Typography>
                </Link>
              </React.Fragment>
            ))}
          </Box>
        </Box>

        {/* Second Header Layer */}
        <Box className='flex justify-between items-center mb-6'>
          <Box
            sx={{
              border: '1px solid #000',
              padding: '10px',
              width: '180px',
              height: '64px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant='h5'>Logo</Typography>
          </Box>

          {/* Navigation Labels */}
          <Box className='flex gap-4'>
            {navigationLabels.map((navItem) => (
              <Typography key={navItem.id} variant='body1' className='text-black mr-4'>
                {navItem.label}
              </Typography>
            ))}
          </Box>

          {/* Search and Icons */}
          <Box className='flex items-center gap-4'>
            {/* Search Box */}
            <Box className='flex items-center rounded-full bg-gray-100 px-4 py-2'>
              <IconButton className='text-gray-500'>
                <i className='ri-search-line' style={{ fontSize: '24px' }}></i>
              </IconButton>
              <InputBase placeholder='Search' />
            </Box>

            {/* Icons (heart and cart) */}
            <IconButton>
              <i className='ri-heart-line' style={{ fontSize: '24px' }}></i>
            </IconButton>
            <IconButton>
              <i className='ri-shopping-cart-line' style={{ fontSize: '24px' }}></i>
            </IconButton>
          </Box>
        </Box>

        {/* Main Section (Track Delivery Progress) */}
        <Box className='flex flex-col items-center mt-16'>
          <Typography variant='h2' className='text-black font-bold mb-4'>
            Track delivery progress of an order
          </Typography>

          <Typography variant='h5' className='text-gray-500 mb-8'>
            Enter the given code to track your order
          </Typography>

          <TextField
            id='order-id'
            variant='outlined'
            placeholder='Order ID*'
            InputProps={{
              className: 'rounded-lg h-[60px]'
            }}
            className='w-[444px] h-[60px] mb-8 rounded-lg - placeholder-gray-500'
          />

          <Button
            variant='contained'
            className='w-[265px] h-[60px] bg-gray-300 text-white rounded-[30px] capitalize-none'
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RetailWebsite
