import type { IStateProps, PropertyType } from './common.type'

type KeyType = PropertyType<IStateProps, 'key'>
type ValueType = PropertyType<IStateProps, 'value'>

export type IFilterStoreProps = IFilterStoreStateProps & IFilterStoreActionProps
export interface IFilterStoreStateProps {
  filter: {
    keyword: string
    page: number
    size: number
  }
}

export interface IFilterStoreActionProps {
  setFilter: (key: KeyType, value: ValueType) => void
}
