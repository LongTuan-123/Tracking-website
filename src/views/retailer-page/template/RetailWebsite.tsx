import { AppBar, Toolbar, Button, Typography, TextField, Box, InputAdornment } from '@mui/material'

export default function RetailWebsite() {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar */}
      <AppBar position='static' className='bg-white shadow-md'>
        <Toolbar className='flex justify-between'>
          {/* Left Section: Logo and Hotline */}
          <Box display='flex' alignItems='center' className='space-x-6'>
            <Box border='1px solid black' p={2}>
              <Typography variant='h6' color='textPrimary' className='font-bold'>
                Logo
              </Typography>
            </Box>
            <Typography variant='body1' color='textSecondary'>
              Hotline: <strong>01234567891</strong>
            </Typography>
          </Box>

          {/* Center Section: Navigation Links */}
          <Box display={{ xs: 'none', md: 'flex' }} className='space-x-4'>
            <Typography variant='body1' className='cursor-pointer'>
              Label
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Label
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Label
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Label
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Label
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Label
            </Typography>
          </Box>

          {/* Right Section: Find a Store, Track Order, Join Us */}
          <Box display='flex' alignItems='center' className='space-x-4'>
            <Typography variant='body1' className='cursor-pointer'>
              Find a Store
            </Typography>
            <Typography variant='body1' className='cursor-pointer text-blue-600'>
              Track the order
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Join Us
            </Typography>
            <Typography variant='body1' className='cursor-pointer'>
              Sign In
            </Typography>

            <Box className='relative'>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Search'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-search-line text-gray-400'></i> {/* Using an <i> tag for the search icon */}
                    </InputAdornment>
                  )
                }}
                className='bg-gray-100 rounded-full'
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box className='flex flex-col items-center justify-center mt-16'>
        <Typography variant='h4' className='font-bold'>
          Track delivery progress of an order
        </Typography>
        <Typography variant='body1' className='text-gray-600 mt-2'>
          Enter the given code to track your order
        </Typography>

        <Box className='mt-8 w-full max-w-lg'>
          <TextField fullWidth label='Order ID*' variant='outlined' className='bg-white' />
        </Box>

        <Button variant='contained' color='primary' className='mt-4 px-12 py-2 rounded-full bg-gray-300 text-gray-500'>
          Submit
        </Button>
      </Box>
    </div>
  )
}
