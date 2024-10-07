import React from 'react';

import { Typography, Box } from '@mui/material';

type JourneyInfoItem = {
  id: string;
  label: string;
  value: string;
};

interface JourneyInfoProps {
  journeyInfo: JourneyInfoItem[];
}

const JourneyInfo: React.FC<JourneyInfoProps> = ({ journeyInfo }) => {
  return (
    <Box className="text-center ">
      {journeyInfo.map((field) => (
        <Typography key={field.id} variant="h5" className="font-bold mb-2 ">
          {field.label}: <br/> <span className="font-normal">{field.value}</span>
        </Typography>
      ))}
    </Box>
  );
};

export default JourneyInfo;
