import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material'

import type { IEnhancedTableHeadProps } from '@/types/table.type'

const EnhancedTableHead = <TData,>(props: IEnhancedTableHeadProps<TData>) => {
  const { indeterminate, checked, columns, hasCheckBox, handleSelectedAllClick } = props

  return (
    <TableHead className='bg-primary'>
      <TableRow>
        {hasCheckBox && (
          <TableCell padding='checkbox'>
            <Checkbox
              color='primary'
              indeterminate={indeterminate}
              checked={checked}
              onChange={handleSelectedAllClick}
              inputProps={{
                'aria-label': 'select all desserts'
              }}
            />
          </TableCell>
        )}
        {columns.map(column => (
          <TableCell
            key={column.id}
            sx={{
              ...(column.customStyle && { ...column.customStyle }),
              color: 'white'
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
