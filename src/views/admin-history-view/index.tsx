'use client'

import { useState } from 'react'

import EnhancedTable from '@/components/table/EnhancedTable'
import { SortBy } from '@/types/common.type'
import type { IFilterAdminHistoryViewProps } from '@/types/admin-history-view/admin-history-props.type'

// import useGetFilterAdminHistoryView from '@/hook/admin-history-view/useGetFilterAdminHistoryView'
import { columnData } from './table/columnData'
import { FilterHistory } from './FilterHistory'
import type { IFilteredAdminHistoryView } from '@/types/admin-history-view/admin-history-response.type'

export const AdminHistoryView = () => {
  const [filterData, setFilterData] = useState<IFilterAdminHistoryViewProps>({
    fromDate: null,
    toDate: null,
    page: 0,
    size: 10,
    sort: SortBy.ASC
  })

  // const { data: filterHistory, isPending: isFetchingHistory } = useGetFilterAdminHistoryView(filterData)
  const filterHistory: {
    data: IFilteredAdminHistoryView[]
    pagination: {
      total: number
      page: number
      size: number
    }
  } = {
    data: [
      {
        id: 1,
        adminId: 1,
        userId: 2,
        action: 'DEPOSIT',
        detail: 'Deposit 2 USDT'
      },
      {
        id: 2,
        adminId: 1,
        userId: 1,
        action: 'WITHDRAW',
        detail: 'Withdraw 8 USDT'
      },
      {
        id: 3,
        adminId: 2,
        userId: 2,
        action: 'BUY_CODE',
        detail: 'Buy 10 codes'
      }
    ],
    pagination: {
      total: 0,
      page: 0,
      size: 0
    }
  }

  const handleChangePagination = (page: number, limit: number) => {
    setFilterData({
      ...filterData,
      page,
      size: limit
    })
  }

  const handleActionTable = (type: string, data: IFilteredAdminHistoryView) => {
    console.log('type', type, data)
  }

  const handleCheckRowId = (ids: (string | number)[]) => {
    // do something
    console.log(ids)
  }

  return (
    <div>
      <h1 className='mb-6'>Admin History View</h1>
      <FilterHistory filter={filterData} setFilter={setFilterData} />
      <EnhancedTable
        data={filterHistory?.data || []}
        pagination={{
          page: filterHistory?.pagination.page || 0,
          limit: filterHistory?.pagination.size || 0,
          handleChangePagination
        }}
        columns={columnData}
        actions={handleActionTable}
        isLoading={false}
        checkedIndex='id'
        hasCheckBox={false}
        handleCheckRowId={handleCheckRowId}
      />
    </div>
  )
}
