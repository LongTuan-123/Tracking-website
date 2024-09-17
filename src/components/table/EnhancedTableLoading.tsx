import { CircularProgress, TableBody, TableCell, TableRow } from '@mui/material'

const EnhancedTableLoading = ({ numberColumns }: { numberColumns: number }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={numberColumns} className='h-[200px]'>
          <div className='w-full flex items-center justify-center'>
            <CircularProgress />
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}

export default EnhancedTableLoading
