'use client'

import { type Dispatch, type SetStateAction } from 'react'

import { Box } from '@mui/material'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import dayjs from '@/utils/dayjs'
import type { IFilterAdminHistoryViewProps } from '@/types/admin-history-view/admin-history-props.type'

type Props = {
  filter: IFilterAdminHistoryViewProps
  setFilter: Dispatch<SetStateAction<IFilterAdminHistoryViewProps>>
}

export const FilterHistory: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <Box
      component='form'
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete='off'
      className='mb-6 flex gap-4 items-center flex-wrap w-full'
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DateTimePicker', 'DateTimePicker']}
          sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', width: '100%', flexDirection: 'row' }}
        >
          <DateTimePicker
            label='From'
            name='fromDate'
            value={dayjs.utc(filter.fromDate)}
            onChange={(newValue) => setFilter((prev) => ({ ...prev, fromDate: dayjs.utc(newValue).toDate() }))}
          />
          <DateTimePicker
            label='To'
            name='toDate'
            value={dayjs.utc(filter.toDate)}
            onChange={(newValue) => setFilter((prev) => ({ ...prev, toDate: dayjs.utc(newValue).toDate() }))}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  )
}
