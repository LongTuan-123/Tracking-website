'use client'

import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'

import EnhancedTable from '@/components/table/EnhancedTable'
import useGetFilterUsersList from '@/hook/users-management/useGetFilterUsersList'
import useFilterStore from '@/store/filter-store/useFilterStore'
import useModalStore from '@/store/modal-store/useModalStore'
import { SortBy } from '@/types/common.type'
import CreateAdminModal from '../components/modals/CreateAdminModal'
import EditAdminModal from '../components/modals/EditAdminModal'
import useAdminManagementController from '../controllers/_admin_management.controller'

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

const AdminManagement = () => {
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

  return (
    <>
      <h1 className='mb-6'>Admin Management</h1>
      <Box className='flex mb-6 gap-5'>
        <Button
          variant='contained'
          style={{ padding: 15 }}
          onClick={() => {
            setAdminModal('create', true)
          }}
        >
          + Create admin
        </Button>
        <TextField
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
      </Box>
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
      {admin.create && <CreateAdminModal />}
      {admin.edit && <EditAdminModal data={data} />}
    </>
  )
}

export default AdminManagement
