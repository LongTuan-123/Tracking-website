import React from 'react';

import { Box, Typography } from '@mui/material';

interface OrderInfoProps {
  label: string;
  id: string | number;
  itemName: string;
}

const OrderInfo: React.FC<OrderInfoProps> = ({ label, id, itemName }) => (
  <Box>
    <Typography variant="h6"><strong>{label}</strong></Typography>
    <Typography variant="h6">{id}</Typography>
    <Typography variant="h6">{itemName}</Typography>
  </Box>
);

export default OrderInfo;
