import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material'

import type { IEnhancedTableBodyProps } from '@/types/table.type'

const EnhancedTableBody = <TData,>(props: IEnhancedTableBodyProps<TData>) => {
  const {
    data,
    listSelected,
    columns,
    checkedIndex,
    hasCheckBox,

    actions,
    handleSelectRow
  } = props

  return (
    <TableBody>
      {data.map((row, index) => {
        return (
          <TableRow key={index}>
            {hasCheckBox && (
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={checkedIndex && listSelected.indexOf(row[checkedIndex] as never) !== -1}
                  onChange={() => handleSelectRow(checkedIndex && (row[checkedIndex] as never))}
                />
              </TableCell>
            )}
            {columns.map((headCell) => (
              <TableCell
                key={headCell.id}
                sx={{
                  ...(headCell.customStyle && { ...headCell.customStyle })
                }}
              >
                {headCell.render ? headCell.render(row, actions) : headCell.key && (row[headCell.key] as string)}
              </TableCell>
            ))}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default EnhancedTableBody
