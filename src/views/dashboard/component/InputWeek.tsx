import React from 'react';

import { FormControl, Select, MenuItem } from '@mui/material';

interface WeekInputProps {
  weekFilter: string;
  setWeekFilter: (value: string) => void;
}

const WeekInput: React.FC<WeekInputProps> = ({ weekFilter, setWeekFilter }) => {
  return (
    <FormControl variant="outlined" color="primary" size="medium">
      <Select className="pr-6" value={weekFilter} onChange={(e) => setWeekFilter(e.target.value)}>
        <MenuItem value="This week">This week</MenuItem>
        <MenuItem value="Last week">Last week</MenuItem>
      </Select>
    </FormControl>
  );
};

export default WeekInput;
 