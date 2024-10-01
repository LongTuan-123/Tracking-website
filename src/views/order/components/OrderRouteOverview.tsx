import { Box, Button } from '@mui/material'

import InputInfo from './InputInfo'
import DashedArrowIcon from '../../../@core/svg/DashedArrowIcon.svg'

const OrderRouteOverview = () => {
  return (
    <Box className='flex flex-col p-6 gap-6'>
      <Box className='flex flex-col'>
        <Box className='flex gap-6 items-end'>
          <InputInfo className='flex-1' value='114 S Columbus St, Sunbury, Ohio' title='Department' />
          <DashedArrowIcon />
          <InputInfo className='flex-1' value='7604 Denton Hwy #200, Watauga, Texas' title='Arrival' />
        </Box>
      </Box>
      <Box className='flex gap-6 items-end justify-center'>
        <InputInfo className='w-[260px]' value='24 hours' title='Expiration time' />
        <Button variant='contained' color='primary' size='medium'>
          Publish order
        </Button>
      </Box>
    </Box>
  )
}

export default OrderRouteOverview
