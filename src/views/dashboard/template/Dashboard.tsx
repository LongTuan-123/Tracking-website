"use client";

import React from 'react';

import Grid from '@mui/material/Grid2'

import { Box, Card, Typography, Divider, Link } from '@mui/material';


import OrderMap from '@/views/order/components/OrderMap';
import WeekInput from '../component/InputWeek';
import MonthInput from '../component/InputMonth';
import { useDashboardController } from '../controller/dashboard.controller';
import OrderInfo from '../component/OderInfo';


const DashboardWithDropdown = () => {
  const {
    TripDeliveryData,
    orderFilter,
    customerFilter,
    ordersDetail,
    customerOrderData,
    setOrderFilter,
    setCustomerFilter,
    renderModeIcon
  } = useDashboardController();

  return (
    <Box className="p-4 bg-gray-100 min-h-screen">
      <Grid container spacing={2}>
        {customerOrderData.map((section) => (
          <Grid size={{ xs: 12, md: 6 }}key={section.section}>
              <Card className="p-4">
                <Box className="flex justify-between items-center">
                  <Typography variant="h4" className="font-bold">{section.section}</Typography>
                    {section.section === 'Orders' ? (
                    <WeekInput weekFilter={orderFilter} setWeekFilter={setOrderFilter} />
                  ) : (
                    <MonthInput monthFilter={customerFilter} setMonthFilter={setCustomerFilter} />
                  )}
                </Box>
                <Divider className="my-2" />
                <Box className="flex justify-between">
                  {section.data.map((order) => (
                    <Box key={order.id}>
                      <Typography variant="h6" className="mt-2">{order.label}</Typography>
                      <Typography variant="h5" className="mt-3 font-bold">{order.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
          </Grid>
))}

        <Grid size={{ xs: 12 }}>
          <Card className="p-4">
            <Typography variant="h4"  className="font-bold">Active shipment</Typography>
            <Divider className="my-2" />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8.5 }}>
                <Box>
                  <Box className="h-96 bg-gray-200 rounded-lg mb-4">
                    <OrderMap/>
                  </Box>
                  {ordersDetail.map((order) => (
                  <Box key={order.id} className="p-4 border rounded flex justify-between items-center mb-2">
                    <OrderInfo label={order.label} id={order.id} itemName={order.itemName}  />
                    <Box>
                     <Typography variant="h6" className="text-gray-600 mr-2">Mode of Transportation:</Typography>
                        <Typography variant="h6" className="text-blue-600 font-bold leading-tight">
                          {renderModeIcon(order.mode)}  {order.mode}
                        </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        <strong>Progress:</strong>
                      </Typography>
                      <Typography variant="h6">{order.progress}</Typography>
                    </Box>
                    <Link href="#" underline="always" color="primary" className="font-bold">
                      View detail
                    </Link>
                  </Box>
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 3.5 }}>
                <Box className="flex flex-col h-full">
               {TripDeliveryData.map((trip) => (
                  <Card key={trip.section} className="flex-1 mb-2">
                          <Box className="p-4">
                            <Typography variant="h4"  className="font-bold">Trips</Typography>
                            <Divider className="my-2" />
                            <Box className="grid grid-cols-2 gap-4">
                              {trip.data.map((trip) => (
                                <Box key={trip.id}>
                                  <Typography variant="h6" className="mt-2">{trip.label}</Typography>
                                  <Typography variant="h5" className="mt-3 font-bold">{trip.value}</Typography>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        </Card>
            ))}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardWithDropdown;
