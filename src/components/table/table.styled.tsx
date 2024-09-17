import styled from '@emotion/styled'
import { Select } from '@mui/material'
import styledMui from '@mui/material/styles/styled'

export const PaginationContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 16px 24px;
`

export const LimitContentStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const SelectStyled = styledMui(Select)({
  '&.MuiInputBase-root': {
    height: '40px',
    backgroundColor: 'transparent',
    borderRadius: '12px',
    border: `1px solid gray`
  },
  '& .MuiSelect-select': {
    height: 'fit-content'
  }
})
