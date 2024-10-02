import React from 'react';

import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector } from '@mui/lab';

import { Box } from '@mui/material';

import HomeAddress from '../../../@core/svg/HomeAddress.svg';

type DeliveryDataItem = {
  type: string;
  address: string;
};

interface AddressTimelineProps {
  deliveryData: DeliveryDataItem[];
}

const AddressTimeline: React.FC<AddressTimelineProps> = ({deliveryData}) => {
  return (
      <Timeline position="left">
        {deliveryData.map((item:any,index:any) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Box className="text-lg">
                <strong>{item.type}</strong><br />{item.address}
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="grey">
                  <HomeAddress className="w-5 h-5 text-black" />
              </TimelineDot>
              {index < deliveryData.length - 1 && <TimelineConnector className="text-black" />}
            </TimelineSeparator>
          </TimelineItem>
        ))}
      </Timeline>

  );
};

export default AddressTimeline;
