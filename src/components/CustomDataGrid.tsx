// CustomDataGrid.js
import React from 'react'

import type { GridColDef, GridValidRowModel, DataGridProps } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, CssBaseline } from '@mui/material'
import type {} from '@mui/x-data-grid/themeAugmentation'

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          backgroundColor: '#C5E3FF',
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: '600'
          }
        },
        columnSeparator: {
          display: 'none'
        }
      }
    }
  }
})

type CustomDataGridProps<RowData extends GridValidRowModel> = {
  rows: RowData[]
  columns: GridColDef[]
} & Omit<DataGridProps, 'rows' | 'columns'>

function CustomDataGrid<RowData extends GridValidRowModel>({ rows, columns, ...rest }: CustomDataGridProps<RowData>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns.map((column) => ({
            ...column,
            flex: column.flex || 1
          }))}
          autoHeight
          {...rest}
          localeText={{
            toolbarDensity: 'Items per page'
          }}
        />
      </Box>
    </ThemeProvider>
  )
}

export default CustomDataGrid
