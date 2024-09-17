export type PropertyType<T, K extends keyof T> = T[K]
export interface IStateProps {
  key: string
  value: any
}

export enum SortBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface IResponse<TData> {
  statusCode: string
  message: string
  data: TData
}

export interface ICommonRespone<TData> {
  statusCode: string
  message: string
  data: IResponseList<TData>
}

export interface IResponseList<TData> {
  totalPages: number
  totalElements: number
  pageable: IPageable
  size: number
  content: TData[]
  number: number
  sort: ISort2
  first: boolean
  last: boolean
  numberOfElements: number
  empty: boolean
}

export interface IPageable {
  pageNumber: number
  pageSize: number
  offset: number
  sort: ISort
  paged: boolean
  unpaged: boolean
}

export interface ISort {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}

export interface ISort2 {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}
