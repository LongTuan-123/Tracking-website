'use client'

import { type Dispatch, type SetStateAction } from 'react'

import { Box } from '@mui/material'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import type { Dayjs } from 'dayjs'

import dayjs from '@/utils/dayjs'
import type { IFilterAdminHistoryViewProps } from '@/types/admin-history-view/admin-history-props.type'


type Props = {
  filter: IFilterAdminHistoryViewProps
  setFilter: Dispatch<SetStateAction<IFilterAdminHistoryViewProps>>
}

export const FilterHistory: React.FC<Props> = ({ filter, setFilter }) => {
  const onChangeDate = (newValue: string | number | Dayjs | Date | null | undefined) => setFilter((prev) => ({ ...prev, fromDate: dayjs.utc(newValue).toDate() }))

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '25ch',
          border: 'var(--mui-palette-customColors-borderColor)',
          borderRadius: '4px'
        }
      }}
      className='mb-6 flex gap-4 items-center flex-wrap w-full'
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DatePicker']}
          sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', width: '100%', flexDirection: 'row' }}
        >
          <DatePicker
            name='date'
            value={dayjs.utc(filter.fromDate)} // Assuming 'fromDate' as the selected date
            onChange={onChangeDate}

            // Disable any validation (such as min/max dates)
            slotProps={{
              textField: {
                error: false, // Ensure no error is shown
                helperText: '' // Clear any validation messages
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                border: 'var(--mui-palette-customColors-borderColor)',
                borderRadius: '4px'
              }
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  )
}
