'use client'

import React from 'react'

import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'

import EnhancedTable from '@/components/table/EnhancedTable'
import useGetFilterUsersList from '@/hook/users-management/useGetFilterUsersList'
import useFilterStore from '@/store/filter-store/useFilterStore'
import useModalStore from '@/store/modal-store/useModalStore'
import { SortBy } from '@/types/common.type'
import useAdminManagementController from '../controllers/_admin_management.controller'
import CreateAdminModal from '../components/modals/CreateAdminModal'
import EditAdminModal from '../components/modals/EditAdminModal'
import FilterIcon from '../../../@core/svg/FilterIcon.svg'
import Dropdown from './TestDropDown'


const defaultFilter = {
  keyword: '',
  page: 0,
  size: 0,
  sortBy: 'userName',
  direction: SortBy.ASC,
  nationality: 'Viet Nam',
  status: 'ACTIVE',
  totalUsdtTree: 0,
  mmAmt: 0,
  usdtAmt: 0,
  unopenedCodeCount: 0
}

const OrderManagement = () => {
  const { data, column, handleFilter, handleCheckRowId, handleActionTable, handleChangePagination } =
    useAdminManagementController()

  const { admin, setAdminModal } = useModalStore()

  const { filter } = useFilterStore()

  const { data: filterUser } = useGetFilterUsersList({
    ...defaultFilter,
    keyword: filter.keyword,
    page: filter.page,
    size: filter.size
  })

  // Fake
  const [selectedSort, setSelectedSort] = React.useState('userName')

  const sortOptions = [
    { label: 'Method', value: 'userName' },
    { label: 'Email', value: 'email' },
    { label: 'Status', value: 'status' },
    { label: 'Created Date', value: 'createdDate' }
  ]

  const handleDropdownChange = (value: string | number) => {
    setSelectedSort(value as string)

    // Optionally handle sorting logic here based on selected value
  }

  return (
    <>
      <h1 className='mb-6'>Order Management</h1>
      <Box className='flex mb-6 gap-5'>
        {/* Search TextField */}
        <TextField
          id='outlined'
          sx={{
            input: {
              padding: '15px 5px'
            }
          }}
          onChange={handleFilter}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton className='text-textPrimary'>
                  <i className='ri-search-line' />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton className='text-textPrimary'></IconButton>
              </InputAdornment>
            )
          }}
          placeholder='Search...'
        />

        <TextField size= 'medium'id='outlined' type='search' name='keyword' placeholder='Type in here' />

        {/* Dropdown for sorting */}
        <Dropdown value={selectedSort} options={sortOptions} onChange={handleDropdownChange} />

        {/* Buttons */}
        <Button
          size='medium'
          color='info'
          startIcon={<FilterIcon />}
          variant='contained'
          style={{ padding: 15 }}
          onClick={() => {
            setAdminModal('create', true)
          }}
        >
          Filter
        </Button>
        <Button
          size='medium'
          variant='contained'
          color='primary'
          style={{ padding: 15 }}
          onClick={() => {
            setAdminModal('create', true)
          }}
        >
          Save
        </Button>
        <Button
          size='medium'
          variant='outlined'
          color='secondary'
          style={{ padding: 15 }}
          onClick={() => {
            setAdminModal('create', true)
          }}
        >
          Cancel
        </Button>
        <Button
          size='large'
          variant='outlined'
          color='primary'
          style={{ padding: 15 }}
          onClick={() => {
            setAdminModal('create', true)
          }}
        >
          Upload
        </Button>
      </Box>

      {/* Enhanced Table */}
      <EnhancedTable
        data={filterUser?.data ?? []}
        pagination={{
          page: filterUser?.pagination.page || 0,
          limit: filterUser?.pagination.size || 0,
          handleChangePagination
        }}
        columns={column}
        actions={handleActionTable}
        hasCheckBox={false}
        handleCheckRowId={handleCheckRowId}
      />

      {/* Modals */}
      {admin.create && <CreateAdminModal />}
      {admin.edit && <EditAdminModal data={data} />}
    </>
  )
}

export default OrderManagement
