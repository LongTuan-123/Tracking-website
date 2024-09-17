import type { IResponse, IResponseList } from '../common.type'

export type IFilterAdminHistoryViewResponse = IResponse<IResponseList<IFilteredAdminHistoryView>>

export type IFilteredAdminHistoryView = {
  id: number
  adminId: number
  userId: number
  action: string
  detail: string
}

// Detail history
export type IDetailAdminHistoryViewResponse = IResponse<IFilteredAdminHistoryView>
