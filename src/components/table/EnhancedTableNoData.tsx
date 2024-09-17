import { TableBody, TableCell, TableRow, Typography } from '@mui/material'

const EnhancedTableNoData = ({ numberColumns }: { numberColumns: number }) => {
  const columns = Array.from({ length: numberColumns }, (_, index) => index)

  return (
    <TableBody>
      <TableRow>
        {columns.map((column, index) => {
          if (Math.floor(numberColumns / 2) === index) {
            return (
              <TableCell key={index}>
                <Typography variant='h4'>No Data</Typography>
              </TableCell>
            )
          }

          return <TableCell key={index} />
        })}
      </TableRow>
    </TableBody>
  )
}

export default EnhancedTableNoData
