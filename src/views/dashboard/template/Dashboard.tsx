"use client";

import React from 'react';

import { Box, Grid, Card, Typography, Divider, Link } from '@mui/material';

import OrderMap from '@/views/order/components/OrderMap';
import WeekInput from '../component/InputWeek';
import MonthInput from '../component/InputMonth';
import { useDashboardController } from '../controller/dashboard.controller';


const DashboardWithDropdown = () => {
  const {
    orderFilter,
    customerFilter,
    tripsData,
    ordersDetail,
    onDeliveryData,
    orderData,
    customerData,
    setOrderFilter,
    setCustomerFilter
  } = useDashboardController();

  return (
    <Box className="p-4 bg-gray-100 min-h-screen">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className="p-4">
            <Box className="flex justify-between items-center">
              <Typography variant="h4"  className="font-bold">Order</Typography>
              <WeekInput weekFilter={orderFilter} setWeekFilter={setOrderFilter} />
            </Box>
            <Divider className="my-2" />
            <Box className="flex justify-between">
              {orderData.map((order, index) => (
                <Box key={index}>
                  <Typography variant="h6" className="mt-2">{order.label}</Typography>
                  <Typography variant="h5" className="mt-3 font-bold">{order.value}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>


        <Grid item xs={12} md={6}>
          <Card className="p-4">
            <Box className="flex justify-between items-center">
                 <Typography variant="h4"  className="font-bold">Customer</Typography>
              <MonthInput monthFilter={customerFilter} setMonthFilter={setCustomerFilter} />
            </Box>
            <Divider className="my-2" />
            <Box className="flex justify-between">
              {customerData.map((customer, index) => (
                <Box key={index}>
                  <Typography variant="h6" className="mt-2">{customer.label}</Typography>
                  <Typography variant="h5" className="mt-3 font-bold">{customer.value}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>


        <Grid item xs={12}>
          <Card className="p-4">
            <Typography variant="h4"  className="font-bold">Active shipment</Typography>
            <Divider className="my-2" />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8.5}>
                <Box>

                  <Box className="h-96 bg-gray-200 rounded-lg mb-4">
                    <OrderMap/>
                  </Box>
                  {ordersDetail.map((order, index) => (
               <Box className="p-4 border rounded flex justify-between items-center">
                    <Box>
                      <Typography variant="subtitle2">
                        <strong>{order.label}</strong>
                      </Typography>
                      <Typography variant="body2">{order.id}</Typography>
                      <Typography variant="body2">{order.itemName}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2">
                        <strong>Mode of Delivery:</strong>
                      </Typography>
                      <Typography variant="body2">
                        <span role="img" aria-label="Air">
                          ✈️
                        </span>{' '}
                        <strong>Air</strong>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2">
                        <strong>Progress:</strong>
                      </Typography>
                      <Typography variant="body2">85%</Typography>
                    </Box>
                    <Link href="#" underline="always" color="primary" className="font-bold">
                      View detail
                    </Link>
                  </Box>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={3.5}>
                <Box className="flex flex-col h-full">

                  <Card className="flex-1 mb-2">
                    <Box className="p-4">
                      <Typography variant="h4"  className="font-bold">Trips</Typography>
                      <Divider className="my-2" />
                      <Box className="grid grid-cols-2 gap-4">
                        {tripsData.map((trip, index) => (
                          <Box key={index}>
                            <Typography variant="h6" className="mt-2">{trip.label}</Typography>
                            <Typography variant="h5" className="mt-3 font-bold">{trip.value}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Card>

                  <Card className="flex-1">
                    <Box className="p-4">
                      <Typography variant="h4"  className="font-bold">On Delivery</Typography>
                      <Divider className="my-2" />
                      <Box className="grid grid-cols-2 gap-4">
                        {onDeliveryData.map((delivery, index) => (
                          <Box key={index}>
                            <Typography variant="h6" className="mt-2">{delivery.label}</Typography>
                            <Typography variant="h5" className="mt-3 font-bold">{delivery.value}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Card>
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
