import React from 'react';

import { Box, Typography } from '@mui/material';

import Boat from '../../../@core/svg/Boat.svg'
import Truck from '../../../@core/svg/Truck.svg'
import Airplane from '../../../@core/svg/AirPlane.svg'

type DeliveryDataItem = {
  mode: string | null;
  type: string;
};

interface ModeOfDeliveryProps {
  deliveryData: DeliveryDataItem[];
}

const renderModeIcon = (mode:string) => {
    switch (mode) {
      case 'Air': return <Airplane className="w-5 h-5 mr-1 text-blue" />
      case 'Ocean': return <Boat className="w-5 h-5 mr-1 text-blue" />
      case 'Truck': return <Truck className="w-5 h-5 mr-1 text-blue" />
      default: return null
    }
  }

const ModeOfDelivery: React.FC<ModeOfDeliveryProps> = ({deliveryData}) => {
  return (
    <Box className="ml-4 mt-1">
      {deliveryData.map((item:any, index:any) => (
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
  );
};

export default ModeOfDelivery;
