'use client'
import { useMemo, useCallback } from 'react'

import { Box, Button, Chip, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import FilterIcon from '../../../@core/svg/FilterIcon.svg'
import ReloadIcon from '../../../@core/svg/ReloadIcon.svg'
import CustomDataGrid from '@/components/CustomDataGrid'
import CustomPopover from '@/components/CustomPopover'
import QRCodeIcon from '../../../@core/svg/QRCodeIcon.svg'
import PencilIcon from '../../../@core/svg/PencilIcon.svg'
import EyeIcon from '../../../@core/svg/EyeIcon.svg'

const successPopoverList = [
  { id: 1, content: 'Configure route', icon: <PencilIcon />, subPath: 'route-configuration' },
  { id: 2, content: 'QR code', icon: <QRCodeIcon />, subPath: 'qrcode' }
]

const notSuccessPopoverList = [
  { id: 1, content: 'View route', icon: <PencilIcon />, subPath: 'route-configuration' },
  { id: 2, content: 'Track the order', icon: <EyeIcon />, subPath: 'route-configuration' },
  { id: 3, content: 'View detail', icon: <EyeIcon />, subPath: 'route-detail' }
]

const OrderManagement = () => {
  const rows = useMemo(
    () => [
      {
        id: 1,
        orderId: 'A01',
        orderDate: '2024-09-01',
        product: 'Laptop',
        volumn: '10kg',
        customerName: 'John Doe',
        phoneNumber: '123-456-7890',
        location: 'New York',
        status: 'Prepairing',
        action: 'View'
      },
      {
        id: 2,
        orderId: 'A02',
        orderDate: '2024-09-02',
        product: 'Smartphone',
        volumn: '20kg',
        customerName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        location: 'Los Angeles',
        status: 'Delivering',
        action: 'Edit'
      },
      {
        id: 3,
        orderId: 'A03',
        orderDate: '2024-09-03',
        product: 'Tablet',
        volumn: '15kg',
        customerName: 'Alice Johnson',
        phoneNumber: '555-123-4567',
        location: 'Chicago',
        status: 'Success',
        action: 'Details'
      },
      {
        id: 4,
        orderId: 'A04',
        orderDate: '2024-09-04',
        product: 'Monitor',
        volumn: '12kg',
        customerName: 'Bob Brown',
        phoneNumber: '444-555-6666',
        location: 'Houston',
        status: 'Failed',
        action: 'Retry'
      },
      {
        id: 5,
        orderId: 'A05',
        orderDate: '2024-09-05',
        product: 'Keyboard',
        volumn: '30kg',
        customerName: 'Charlie Davis',
        phoneNumber: '222-333-4444',
        location: 'Phoenix',
        status: 'Delivering',
        action: 'Track'
      }
    ],
    []
  )

  const getModeByStatus = useCallback((status: string) => {
    const lowerText = status.toLowerCase()

    switch (lowerText) {
      case 'prepairing':
        return 'warning'
      case 'delivering':
        return 'primary'
      case 'success':
        return 'success'
      case 'failed':
        return 'error'
      default:
        return 'primary'
    }
  }, [])

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'orderId', headerName: 'Order No.', type: 'string' },
      { field: 'orderDate', headerName: 'Order Date', type: 'string' },
      { field: 'product', headerName: 'Product', type: 'string' },
      { field: 'volumn', headerName: 'Volumn', type: 'number' },
      { field: 'customerName', headerName: 'Customer Name', type: 'string' },
      { field: 'phoneNumber', headerName: 'Phone Number', type: 'string' },
      { field: 'location', headerName: 'Location', type: 'string' },
      {
        field: 'status',
        headerName: 'Status',
        type: 'string',
        renderCell: (params: GridRenderCellParams) => (
          <Chip label={params.value} variant='tonal' color={getModeByStatus(params.value)} />
        ),
        align: 'center',
        headerAlign: 'center'
      },
      {
        field: 'action',
        headerName: 'Action',
        type: 'actions',
        renderCell: (params: GridRenderCellParams) => {
          const isProgressSuccess = params.row.status === 'Success'
          const popoverList = isProgressSuccess ? successPopoverList : notSuccessPopoverList

          return <CustomPopover itemList={popoverList} orderId={params.row.orderId} mainRoute={'order'} />
        },
        align: 'center',
        headerAlign: 'center'
      }
    ],
    [getModeByStatus]
  )

  return (
    <Box>
      <Typography variant='h1' className='mb-6'>
        Order Management
      </Typography>
      <Box className='flex mb-6 gap-5 justify-between items-center'>
        <Box className='flex gap-5'>
          <TextField
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
                  <IconButton className='text-textPrimary' />
                </InputAdornment>
              )
            }}
            placeholder='Search...'
          />
          <Button  variant='outlined'  color='primary' size='medium' startIcon={<FilterIcon />} >
            Filter
          </Button>
        </Box>
        <Button  variant='contained' color= 'primary' size='medium' startIcon={<ReloadIcon />}>
          Sync order
        </Button>
      </Box>
      <CustomDataGrid rows={rows} columns={columns} />
    </Box>
  )
}

export default OrderManagement
