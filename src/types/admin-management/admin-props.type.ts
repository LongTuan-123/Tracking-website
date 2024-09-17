export interface IFilterAdminProps {
  keyword: string
  page: number
  size: number
  sortBy: string
  direction: string
  roleUserEnum: string
  roundName: string
  typeTransaction: string
  totalUsdt: number
  totalMm: number
  status: string
}

export interface ICreateAdminProps {
  userName: string
  password: string
}
