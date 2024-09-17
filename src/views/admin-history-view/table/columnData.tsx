import type { IFilteredAdminHistoryView } from '@/types/admin-history-view/admin-history-response.type'
import type { IColumnEnhancedTable } from '@/types/table.type'
import { TransactionHistoryDetail } from '../detail/TransactionHistoryDetail'

export const columnData: IColumnEnhancedTable<IFilteredAdminHistoryView>[] = [
  {
    id: 'id', // NOTE: Must be 'id' for generate anchor element
    key: 'id',
    label: 'Transaction ID',
    render: (data) => <TransactionHistoryDetail data={data} />
  },
  {
    id: 'adminId',
    key: 'adminId',
    label: 'Admin ID'
  },
  {
    id: 'userId',
    key: 'userId',
    label: 'User ID'
  },
  {
    id: 'action',
    key: 'action',
    label: 'Action'
  },
  {
    id: 'detail',
    key: 'detail',
    label: 'Detail'
  }
]
