'use client'

import { useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from 'react'

import type { SelectChangeEvent } from '@mui/material'
import { Box, TextField } from '@mui/material'

import type { IFilterUsersProps } from '@/types/users-management/user-props.type'
import { CustomSelect } from '@/components/CustomSelect'
import { SortBy } from '@/types/common.type'
import { useDebounce } from '@/hook/useDebounce'
import { UserStatus } from '@/types/users-management/user-response.type'

type Props = {
  filter: IFilterUsersProps
  setFilter: Dispatch<SetStateAction<IFilterUsersProps>>
}

export const FilterUser: React.FC<Props> = ({ filter, setFilter }) => {
  const [keyword, setKeyword] = useState<string>(filter.keyword)
  const throttleKeyword = useDebounce(keyword, 500)

  useEffect(() => {
    setFilter((prev) => ({ ...prev, keyword: throttleKeyword }))
  }, [setFilter, throttleKeyword])

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setKeyword(value)
  }

  const onChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target

    setFilter((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Box
      component='form'
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete='off'
      className='mb-6 flex gap-4 items-center flex-wrap w-full'
    >
      <TextField
        id='outlined-search'
        label='Keyword'
        type='search'
        name='keyword'
        value={keyword}
        onChange={onChangeInput}
      />
      <CustomSelect
        label='Direction'
        name='direction'
        options={[
          { value: SortBy.ASC, label: 'Ascending' },
          { value: SortBy.DESC, label: 'Descending' }
        ]}
        value={filter.direction}
        onChange={onChangeSelect}
      />
      <CustomSelect
        label='Status'
        name='status'
        options={[
          { value: UserStatus.ACTIVE, label: 'Active' },
          { value: UserStatus.BLOCKED, label: 'Blocked' }
        ]}
        value={filter.status}
        onChange={onChangeSelect}
      />
    </Box>
  )
}
