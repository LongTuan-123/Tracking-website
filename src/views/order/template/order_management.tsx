'use client'

import { Box, Button, Chip, IconButton, InputAdornment, TextField } from '@mui/material'

import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import useAdminManagementController from '../controllers/_admin_management.controller'
import FilterIcon from '../../../@core/svg/FilterIcon.svg'
import ReloadIcon from '../../../@core/svg/ReloadIcon.svg'
import ThreeDotsIcon from '../../../@core/svg/ThreeDotsIcon.svg'
import CustomDataGrid from '@/components/CustomDataGrid'
import React from 'react'

const OrderManagement = () => {
  useAdminManagementController()

  const rows = [
    {
      id: 1,
      orderId: '1',
      orderDate: '2024-09-01',
      product: 'Laptop',
      volumn: 10,
      customerName: 'John Doe',
      phoneNumber: '123-456-7890',
      location: 'New York',
      status: 'Prepairing',
      action: 'View'
    },
    {
      id: 2,
      orderId: '2',
      orderDate: '2024-09-02',
      product: 'Smartphone',
      volumn: 20,
      customerName: 'Jane Smith',
      phoneNumber: '987-654-3210',
      location: 'Los Angeles',
      status: 'Delivering',
      action: 'Edit'
    },
    {
      id: 3,
      orderId: '3',
      orderDate: '2024-09-03',
      product: 'Tablet',
      volumn: 15,
      customerName: 'Alice Johnson',
      phoneNumber: '555-123-4567',
      location: 'Chicago',
      status: 'Success',
      action: 'Details'
    },
    {
      id: 4,
      orderId: '4',
      orderDate: '2024-09-04',
      product: 'Monitor',
      volumn: 5,
      customerName: 'Bob Brown',
      phoneNumber: '444-555-6666',
      location: 'Houston',
      status: 'Failed',
      action: 'Retry'
    },
    {
      id: 5,
      orderId: '5',
      orderDate: '2024-09-05',
      product: 'Keyboard',
      volumn: 30,
      customerName: 'Charlie Davis',
      phoneNumber: '222-333-4444',
      location: 'Phoenix',
      status: 'Delivering',
      action: 'Track'
    }
  ]

  const columns: GridColDef[] = [
    { field: 'orderId', headerName: 'Order No.', type: 'string' },
    { field: 'orderDate', headerName: 'Order Date', type: 'string' },
    { field: 'product', headerName: 'Product', type: 'string' },
    { field: 'volumn', headerName: 'number', type: 'number' },
    { field: 'customerName', headerName: 'Customer Name', type: 'string' },
    { field: 'phoneNumber', headerName: 'Phone Number', type: 'string' },
    { field: 'location', headerName: 'Location', type: 'string' },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      renderCell: (params: GridRenderCellParams) => {
        return <Chip label={params.value} variant='tonal' color={getModeByStatus(params.value)} />
      },
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'action',
      headerName: 'Action',
      type: 'actions',
      renderCell: (params: GridRenderCellParams) => {
        return <IconButton children={<ThreeDotsIcon />} onClick={() => console.log(params)} />
      },
      align: 'center',
      headerAlign: 'center'
    }
  ]

  const getModeByStatus = (status: string) => {
    const lowerText = status.toLowerCase()

    switch (lowerText) {
      case 'prepairing':
        return 'warning'
      case 'delivering':
        return 'info'
      case 'success':
        return 'success'
      case 'failed':
        return 'error'
      default:
        return 'primary'
    }
  }





  return (
    <>
      <h1 className='mb-6'>Order Management</h1>
      <Box className='flex mb-6 gap-5' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box className='flex gap-5'>
          <TextField
            size="medium"
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <IconButton className='text-textPrimary' >
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


          <Button size='medium'variant='outlined' color='secondary'  startIcon={<FilterIcon style={{ color: 'black'  }} />} onClick={() => {}}>
            Filter
          </Button>
        </Box>
        <Button size='medium' color='primary' variant='contained' startIcon={<ReloadIcon />} onClick={() => {}}>
          Sync order
        </Button>
      </Box>
      <CustomDataGrid rows={rows} columns={columns} />
    </>
  )
}

export default OrderManagement
