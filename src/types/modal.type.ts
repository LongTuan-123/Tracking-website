import type { IStateProps, PropertyType } from './common.type'

type KeyType = PropertyType<IStateProps, 'key'>
type ValueType = PropertyType<IStateProps, 'value'>

export type IModalStoreProps = IModalStoreStateProps & IModalStoreActionProps
export interface IModalStoreStateProps {
  statusModal: {
    deleteModal: boolean
  }
  admin: {
    create: boolean
    edit: boolean
  }
}

export interface IModalStoreActionProps {
  setStatusModal: (key: KeyType, value: ValueType) => void
  setAdminModal: (key: KeyType, value: ValueType) => void
}
