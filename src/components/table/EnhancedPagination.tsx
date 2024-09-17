import type { SelectChangeEvent } from '@mui/material'
import { MenuItem, Pagination, Typography } from '@mui/material'

import { LimitContentStyled, PaginationContainerStyled, SelectStyled } from './table.styled'

type IEnhancedPaginationProps = {
  page: number
  limit: number
  handleChangePagination?: (page: number, limit: number) => void
}

const LIST_LIMITS = [10, 20, 50, 100]

const EnhancedPagination = (props: IEnhancedPaginationProps) => {
  const { page = 1, limit = 10, handleChangePagination } = props

  const handleChangeLimit = (_: unknown, pageSize: number) => {
    handleChangePagination && handleChangePagination(pageSize, limit)
  }

  const handleChangePage = (event: SelectChangeEvent<unknown>) => {
    handleChangePagination && handleChangePagination(page, Number(event.target.value))
  }

  return (
    <PaginationContainerStyled>
      <LimitContentStyled>
        <Typography>Số dòng hiển thị</Typography>
        <SelectStyled defaultValue={limit} variant='outlined' onChange={handleChangePage}>
          {LIST_LIMITS.map((limit, index) => (
            <MenuItem key={index} value={limit}>
              {limit}
            </MenuItem>
          ))}
        </SelectStyled>
      </LimitContentStyled>
      <Pagination count={page} shape='rounded' onChange={handleChangeLimit} />
    </PaginationContainerStyled>
  )
}

export default EnhancedPagination
