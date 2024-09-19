import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Controller, useFormContext } from 'react-hook-form'

type IRadioChangeStatus = {
  name: string
}

export default function RadioChangeStatus({ name }: IRadioChangeStatus) {
  const methods = useFormContext()

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => {
        const handeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          field.onChange((event.target as HTMLInputElement).value)
        }

        return (
          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>Status</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
              value={field.value}
              onChange={handeChange}
            >
              <FormControlLabel value='YES' control={<Radio />} label='Block' />
              <FormControlLabel value='NO' control={<Radio />} label='UnBlock' />
            </RadioGroup>
          </FormControl>
        )
      }}
    />
  )
}
