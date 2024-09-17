import type { CSSProperties } from 'react'

export interface IColumnTable extends CSSProperties {
  id: string
  label: string
}

export type UserDialogType = 'block' | 'unblock' | 'buy-code' | 'deposit' | 'withdraw' | 'convert-point'

export interface IColumnEnhancedTable<TData> {
  id: string
  key?: keyof TData
  label: string
  customStyle?: CSSProperties

  // FIXME: Correct type
  render?: (data: TData, callBack: (key: string, data: TData) => void) => React.ReactNode | string
}

export interface IEnhancedPaginationProps {
  page: number
  limit: number
  handleChangePagination: (page: number, limit: number) => void
}

export interface IEnhancedTableContextProps<TData> {
  data: TData[]
  hasCheckBox?: boolean
  checkedIndex?: keyof TData
  columns: IColumnEnhancedTable<TData>[]
  actions: (type: string, data: TData) => void
}

export interface IEnhancedTableProps<TData> extends IEnhancedTableContextProps<TData> {
  headerStyle?: CSSProperties
  bodyStyle?: CSSProperties
  customStyle?: CSSProperties
  pagination?: IEnhancedPaginationProps
  isLoading?: boolean

  handleCheckRowId?: (ids: TData[keyof TData][]) => void
}

export interface IEnhancedTableBodyProps<TData> extends IEnhancedTableContextProps<TData> {
  listSelected: TData[keyof TData][]
  handleSelectRow: (id: TData[keyof TData] | undefined) => void
}

export interface IEnhancedTableHeadProps<TData>
  extends Pick<IEnhancedTableContextProps<TData>, 'columns' | 'hasCheckBox'> {
  indeterminate: boolean
  checked: boolean
  columns: IColumnEnhancedTable<TData>[]
  handleSelectedAllClick: () => void
}

export interface IColumnTableCollapse<TData> {
  id: string
  key?: keyof TData
  label: string
  customStyle?: CSSProperties
  render?: (data: TData, callBack: (key: string) => void) => React.ReactNode | string
}

export interface ITableCollapseProps<TData, TDataByKey>
  extends Omit<IEnhancedTableContextProps<TData>, 'hasCheckBox' | 'data' | 'columns'> {
  collapseIndex: keyof TData
  data: TData[]

  columns: IColumnTableCollapse<TDataByKey>[]

  buttonHeader?: (row: TData) => JSX.Element

  headerStyle?: CSSProperties
  bodyStyle?: CSSProperties
  customStyle?: CSSProperties
  pagination?: IEnhancedPaginationProps
}

export interface ITableCollapseHeaderProps<TData, TDataByKey>
  extends Pick<ITableCollapseProps<TData, TDataByKey>, 'columns' | 'headerStyle'> {}

export interface ITableCollapseBodyProps<TData, TDataByKey>
  extends Omit<ITableCollapseProps<TData, TDataByKey>, 'customStyle' | 'headerStyle' | 'pagination'> {}
