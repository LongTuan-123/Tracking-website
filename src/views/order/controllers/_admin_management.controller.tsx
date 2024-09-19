import { useState } from 'react'

import useFilterStore from '@/store/filter-store/useFilterStore'
import useModalStore from '@/store/modal-store/useModalStore'
import type { IColumnEnhancedTable } from '@/types/table.type'
import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import RenderAction from '../components/render/RenderAction'

const column: IColumnEnhancedTable<IFilterUsersContent>[] = [
  {
    id: 'userId',
    key: 'userId',
    label: 'ID'
  },
  {
    id: 'userName',
    key: 'userName',
    label: 'Name'
  },
  {
    id: 'status',
    key: 'status',
    label: 'Status'
  },
  {
    id: 'action',
    key: 'action',
    label: '',
    render: (data: IFilterUsersContent, action: (type: string, data: IFilterUsersContent) => void) => {
      return <RenderAction data={data} action={action} />
    }
  }
]

const useAdminManagementController = () => {
  const { setFilter } = useFilterStore()
  const { setAdminModal } = useModalStore()
  const [data, setData] = useState<IFilterUsersContent>()

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter('keyword', e.target.value.trim())
  }

  const handleChangePagination = (page: number, limit: number) => {
    setFilter('page', page)
    setFilter('size', limit)
  }

  const handleActionTable = (type: string, data: IFilterUsersContent) => {
    switch (type) {
      case 'edit':
        setAdminModal('edit', true)
        setData(data)
        break
      default:
        break
    }
  }

  const handleCheckRowId = () => {}

  return {
    column,
    data,

    handleFilter,
    handleCheckRowId,
    handleActionTable,
    handleChangePagination
  }
}

export default useAdminManagementController
