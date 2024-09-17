import Link from 'next/link'

import type { IColumnEnhancedTable } from '@/types/table.type'
import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import { UserActionDialog } from '../dialog'

export const columnData: IColumnEnhancedTable<IFilterUsersContent>[] = [
  {
    id: 'id', // NOTE: Must be 'id' for generate anchor element
    key: 'userId',
    label: 'ID',
    render: (data) => {
      return (
        <Link href={`/users-management/${data.userId}`} className='hover:underline transition hover:text-blue-400'>
          {data.userId}
        </Link>
      )
    }
  },
  {
    id: 'userName',
    key: 'userName',
    label: 'User Name'
  },
  {
    id: 'email',
    key: 'email',
    label: 'Email'
  },
  {
    id: 'phone',
    key: 'phone',
    label: 'Phone'
  },
  {
    id: 'nationality',
    key: 'nationality',
    label: 'Nationality'
  },
  {
    id: 'status',
    key: 'status',
    label: 'Status'
  },
  {
    id: 'actions',
    label: '',
    render: (data, handleAction) => <UserActionDialog data={data} handleAction={handleAction} />
  }
]
