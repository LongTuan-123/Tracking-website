import type { ICommonRespone } from '../common.type'

export type IAdminContent = {
  status: string
  description: string
  totalMm: number
  userName: string
  userId: number
  createdBy: string
  roundName: string
  totalUsdt: number
  roleUserEnum: string
  typeTransaction: string
  createdAt: string
  action?: null
}
export type IAdminResponse = ICommonRespone<IAdminContent>
