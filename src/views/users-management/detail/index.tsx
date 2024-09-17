'use client'

import type { ChangeEvent } from 'react'
import { useState } from 'react'

import type { SelectChangeEvent } from '@mui/material'
import { Box, Button, TextField } from '@mui/material'

import { LoadingButton } from '@mui/lab'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { UserStatus, type IFilterUsersContent } from '@/types/users-management/user-response.type'
import { DefaultUser } from '@/hook/users-management/useGetDetailUser'
import useUpdateUser from '@/hook/users-management/useUpdateUser'
import dayjs from '@/utils/dayjs'
import { CustomSelect } from '@/components/CustomSelect'

type Props = {
  userId: string
}

export const DetailUser: React.FC<Props> = ({ userId }) => {
  console.log(userId)

  // const { data, isLoading } = useGetDetailUser(userId)
  const [user, setUser] = useState<IFilterUsersContent>(DefaultUser)
  const { isPending, mutate } = useUpdateUser()

  // useEffect(() => {
  //   if (!isLoading && data) {
  //     setUser(data)
  //   }
  // }, [isLoading, data])

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO: Change specific type: string, value, date
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const onChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target

    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const onUpdateUser = () => {
    // TODO: Update user
    mutate(user)
    console.log(user)
  }

  return (
    <div>
      <Box
        component='form'
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete='off'
        className='flex items-center gap-4 flex-wrap mb-6'
      >
        <TextField
          required={true}
          id='outlined-required'
          label='Full name'
          name='fullName'
          value={user.fullName}
          onChange={onChangeInput}
        />
        <TextField
          required={true}
          id='outlined-required'
          label='Email'
          name='email'
          value={user.email}
          onChange={onChangeInput}
        />
        <CustomSelect
          label='Status'
          name='status'
          options={[
            { value: UserStatus.ACTIVE, label: 'Active' },
            { value: UserStatus.BLOCKED, label: 'Blocked' }
          ]}
          value={user.status}
          onChange={onChangeSelect}
        />
        <TextField
          required={true}
          id='outlined-required'
          label='Phone'
          name='phone'
          value={user.phone}
          onChange={onChangeInput}
        />
        <TextField
          required={true}
          id='outlined-required'
          label='Nationality'
          name='nationality'
          value={user.nationality}
          onChange={onChangeInput}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker
              label='From'
              views={['year', 'month', 'day']}
              name='birthday'
              value={dayjs.utc(user.birthday)}
              onChange={(newValue) => setUser((prev) => ({ ...prev, birthday: dayjs.utc(newValue).toString() }))}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          required={true}
          id='outlined-required'
          label='Total USDT Tree'
          name='totalUsdtTree'
          value={user.totalUsdtTree}
          onChange={onChangeInput}
        />
        <TextField
          required={true}
          id='outlined-number'
          type='number'
          label='MM amount'
          name='mmAmt'
          value={user.mmAmt}
          onChange={onChangeInput}
        />
        <TextField
          required={true}
          id='outlined-number'
          type='number'
          label='USDT amount'
          name='usdtAmt'
          value={user.usdtAmt}
          onChange={onChangeInput}
        />
        <TextField
          required={true}
          id='outlined-number'
          type='number'
          label='Unopened Code amount'
          name='unopenedCodeCount'
          value={user.unopenedCodeCount}
          onChange={onChangeInput}
        />
      </Box>
      {isPending ? (
        <LoadingButton loading={isPending} loadingPosition='start'>
          Updating
        </LoadingButton>
      ) : (
        <Button type='button' variant='contained' onClick={onUpdateUser}>
          Update
        </Button>
      )}
    </div>
  )
}
