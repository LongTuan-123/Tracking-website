'use client';

import OrderMap from '../components/OrderMap';
import useWindowSize from '@/@core/hooks/useWindowSize';
import Grid from '@mui/material/Grid2';
import AddressTimeline from '../components/AddressTimeline';
import ModeOfDelivery from '../components/ModeDelivery';
import JourneyInfo from '../components/JourneyInfo';
import { Button, Divider, Typography, Box } from '@mui/material';
import { useOrderController } from '../controllers/qrcode.controller.controller';

const OrderRouteDetail = () => {
  const { height } = useWindowSize();

  const {
    orderInfo,
    deliveryData,
    customerInfo,
    journeyInfo,
    handleGenerateQRCode,
    handleSendQRCode,
    handleCancel
  } = useOrderController();

  return (
    <Box className="container mx-auto p-4">
      <Typography variant="h3" className="mb-6 font-semibold">Configure route (Order ID: 012345678)</Typography>
  

    <Box className="relative">
      <Box sx={{ width: '100%', height: `${height ? height - 165 : 610}px` }}>
        <OrderMap />
      </Box>

      <Box
        sx={{
          zIndex: 99999,
          position: 'absolute',
          bottom: 12,
          width: '96%',
          height:'37%',
          left: '2%',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <Box className=" p-3 bg-white rounded-lg ">
           <Box className="inline-flex items-center mb-6">
          <Typography variant="h4" className="font-bold mr-2">Route detail:</Typography>
          <Typography variant="h4">DHL Group</Typography>
        </Box>

        <Grid container spacing={2}>  
          <Grid container size={7} alignItems="center">
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

          <Grid size={2.3}>
            <Box className="flex justify-end mt-8 px-4"> 
              <Box className="flex flex-col items-end space-y-4 w-60">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleGenerateQRCode}
                  fullWidth
                >
                  Select
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={handleSendQRCode}
                  fullWidth
                >
                  Request Change
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={handleCancel}
                  fullWidth
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Grid>
        
        </Grid>
      </Box>
    </Box>
  </Box>
</Box>
  );
};

export default OrderRouteDetail;
