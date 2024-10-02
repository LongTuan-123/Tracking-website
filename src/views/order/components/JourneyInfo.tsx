import React from 'react';

import { Typography, Box } from '@mui/material';

type JourneyInfoItem = {
  label: string;
  value: string;
};

interface JourneyInfoProps {
  journeyInfo: JourneyInfoItem[];
}

const JourneyInfo: React.FC<JourneyInfoProps> = ({ journeyInfo }) => {
  return (
    <Box>
      {journeyInfo.map((field, index) => (
        <Typography key={index} variant="h5" className="font-bold mb-2">
          {field.label}: <span className="font-normal">{field.value}</span>
        </Typography>
      ))}
    </Box>
  );
};

export default JourneyInfo;
