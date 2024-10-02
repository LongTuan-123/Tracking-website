'use client'

import { Box } from '@mui/material'

import OrderMap from '../components/OrderMap'
import OrderRouteOverview from '../components/OrderRouteOverview'
import useWindowSize from '@/@core/hooks/useWindowSize'

const OrderRouteConfiguration = () => {
  const { height } = useWindowSize()

  return (
    <Box className='relative'>
      <Box sx={{ width: '100%', height: `${height ? height - 165 : 610}px` }}>
        <OrderMap />
      </Box>
      <Box
        sx={{
          zIndex: 99999,
          position: 'absolute',
          bottom: 12,
          width: '96%',
          left: '2%',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}
      >
        <OrderRouteOverview />
      </Box>
    </Box>
  )
}

export default OrderRouteConfiguration
