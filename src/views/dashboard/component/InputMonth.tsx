import React from 'react';

import { FormControl, Select, MenuItem } from '@mui/material';

interface MonthInputProps {
  monthFilter: string;
  setMonthFilter: (value: string) => void;
}

const MonthInput: React.FC<MonthInputProps> = ({ monthFilter, setMonthFilter }) => {
  return (
    <FormControl variant="outlined" color="primary" size="medium">
      <Select className="pr-6" value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)}>
        <MenuItem value="This month">This month</MenuItem>
        <MenuItem value="Last month">Last month</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MonthInput;
