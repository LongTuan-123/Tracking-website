import React from 'react'

import type { SelectChangeEvent} from '@mui/material';
import { FormControl, Select, MenuItem, OutlinedInput } from '@mui/material'

interface DropdownProps {
  value: string | number
  options: Array<{ label: string; value: string | number }>
  onChange: (value: string | number) => void
  disabled?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange, disabled = false }) => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange(event.target.value as string | number)
  }

  return (
    <FormControl
      variant='outlined'
      fullWidth
      sx={{
        minWidth: 166,
        maxWidth: 166,
        height:'40px',
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          height: '44px',
          borderColor: 'var(--mui-palette-customColors-borderColor)'
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--mui-palette-customColors-borderColor)'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--mui-palette-customColors-borderColor)'
        },
        '& .MuiSelect-select': {
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center'
        },
        '& .MuiSelect-icon': {
          color: 'var(--mui-palette-customColors-borderColor)'
        },
        '& .Mui-focused': {
          backgroundColor: 'transparent' // Disable background highlight on focus
        }
      }}
      disabled={disabled}
    >
      <Select value={value} onChange={handleChange} input={<OutlinedInput notched={false} />}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown
