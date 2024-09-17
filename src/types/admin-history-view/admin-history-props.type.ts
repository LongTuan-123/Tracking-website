import type { SortBy } from '../common.type'

export interface IFilterAdminHistoryViewProps {
  fromDate: Date | null
  toDate: Date | null
  page: number
  size: number
  sort: SortBy
}
