import type { IModalStoreStateProps } from '@/types/modal.type'

export const initialModalStoreValue: IModalStoreStateProps = {
  statusModal: {
    deleteModal: false
  },
  admin: {
    create: false,
    edit: false
  }
}
