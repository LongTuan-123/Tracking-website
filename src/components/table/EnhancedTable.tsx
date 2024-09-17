import { useMemo, useState } from 'react'

import { Table, TableContainer } from '@mui/material'

import type { IEnhancedTableProps } from '@/types/table.type'

import EnhancedTableHead from './EnhancedTableHead'
import EnhancedTableBody from './EnhancedTableBody'
import EnhancedPagination from './EnhancedPagination'
import EnhancedTableLoading from './EnhancedTableLoading'
import EnhancedTableNoData from './EnhancedTableNoData'

const EnhancedTable = <TData,>(props: IEnhancedTableProps<TData>) => {
  const {
    data,
    columns,
    pagination,
    customStyle,
    checkedIndex,
    hasCheckBox = true,
    isLoading,

    actions,
    handleCheckRowId
  } = props

  const [listSelected, setListSelected] = useState<TData[keyof TData][]>([])

  const handleSelectedAllClick = () => {
    if (listSelected.length === data.length || !checkedIndex) {
      setListSelected([])

      return
    }

    const newSelecteds = data.map(n => n[checkedIndex])

    setListSelected(newSelecteds)

    handleCheckRowId && handleCheckRowId(newSelecteds)
  }

  const handleSelectRow = (id: TData[keyof TData] | undefined) => {
    if (!id) return

    const selectedIndex = listSelected.indexOf(id)
    let newSelected: TData[keyof TData][] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(listSelected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(listSelected.slice(1))
    } else if (selectedIndex === listSelected.length - 1) {
      newSelected = newSelected.concat(listSelected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(listSelected.slice(0, selectedIndex), listSelected.slice(selectedIndex + 1))
    }

    setListSelected(newSelected)

    handleCheckRowId && handleCheckRowId(newSelected)
  }

  const contentTableBody = useMemo(() => {
    const numberColumns = hasCheckBox ? columns.length + 1 : columns.length

    if (isLoading) {
      return <EnhancedTableLoading numberColumns={numberColumns} />
    }

    if (data.length === 0) {
      return <EnhancedTableNoData numberColumns={numberColumns} />
    }

    return (
      <EnhancedTableBody
        data={data}
        columns={columns}
        hasCheckBox={hasCheckBox}
        checkedIndex={checkedIndex}
        listSelected={listSelected}
        handleSelectRow={handleSelectRow}
        actions={actions}
      />
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions, checkedIndex, columns, data, hasCheckBox, isLoading, listSelected])

  return (
    <TableContainer sx={{ ...customStyle }}>
      <Table aria-label='simple table'>
        <EnhancedTableHead
          columns={columns}
          hasCheckBox={hasCheckBox}
          indeterminate={listSelected.length > 0 && listSelected.length < data.length}
          checked={listSelected.length === data.length}
          handleSelectedAllClick={handleSelectedAllClick}
        />
        {contentTableBody}
      </Table>
      <EnhancedPagination
        page={pagination?.page || 1}
        limit={pagination?.limit || 10}
        handleChangePagination={pagination?.handleChangePagination}
      />
    </TableContainer>
  )
}

export default EnhancedTable
