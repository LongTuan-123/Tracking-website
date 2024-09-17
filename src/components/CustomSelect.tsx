import type { SelectChangeEvent } from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export type Option = {
  label: string
  value: string
}

type Props = {
  label: string
  name: string
  value: string
  options: Option[]
  required?: boolean
  onChange: (event: SelectChangeEvent<string>) => void
}

export const CustomSelect: React.FC<Props> = ({ label, name, value, options, required = true, onChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 160 }}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        required={required}
        labelId={name}
        id={`id-${name}`}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
