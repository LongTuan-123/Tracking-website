import type { IResponse, IResponseList } from '../common.type'

export type IFilterUsersResponse = IResponse<IResponseList<IFilterUsersContent>>

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED'
}

export type IFilterUsersContent = {
  userId: number
  userName: string
  phone: string
  fullName: string
  email: string
  nationality: string
  birthday: string
  refererUsername: string
  status: UserStatus | string
  totalUsdtTree: number
  mmAmt: number
  usdtAmt: number
  unopenedCodeCount: number
  updatedBy: string
  updatedAt: string
  action?: string
}

// Detail user
export type IDetailUserResponse = IResponse<IFilterUsersContent>
