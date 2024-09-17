'use client'

import { useState } from 'react'

import EnhancedTable from '@/components/table/EnhancedTable'
import useGetFilterUsersList from '@/hook/users-management/useGetFilterUsersList'
import { SortBy } from '@/types/common.type'
import type { IFilterUsersProps } from '@/types/users-management/user-props.type'
import { FilterUser } from './FilterUser'
import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import { columnData } from './tables/columnData'

const UsersManagement = () => {
  const [filterData, setFilterData] = useState<IFilterUsersProps>({
    keyword: '',
    page: 0,
    size: 0,
    sortBy: 'userName',
    direction: SortBy.ASC,
    nationality: 'Viet Nam',
    status: 'ACTIVE',
    totalUsdtTree: 0,
    mmAmt: 0,
    usdtAmt: 0,
    unopenedCodeCount: 0
  })

  const { data: filterUser, isPending: isFilterUser } = useGetFilterUsersList(filterData)

  const handleChangePagination = (page: number, limit: number) => {
    setFilterData({
      ...filterData,
      page,
      size: limit
    })
  }

  const handleActionTable = (type: string, data: IFilterUsersContent) => {
    console.log('type', type, data)
  }

  const handleCheckRowId = (ids: (string | number | undefined)[]) => {
    // do something
    console.log(ids)
  }

  return (
    <div>
      <h1 className='mb-6'>Users Management</h1>
      <FilterUser filter={filterData} setFilter={setFilterData} />
      <EnhancedTable
        data={filterUser?.data || []}
        pagination={{
          page: filterUser?.pagination.page || 0,
          limit: filterUser?.pagination.size || 0,
          handleChangePagination
        }}
        columns={columnData}
        actions={handleActionTable}
        isLoading={isFilterUser}
        checkedIndex='userId'
        hasCheckBox={false}
        handleCheckRowId={handleCheckRowId}
      />
    </div>
  )
}

export default UsersManagement
