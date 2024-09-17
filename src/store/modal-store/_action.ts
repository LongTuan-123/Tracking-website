import type { IModalStoreActionProps, IModalStoreProps, IModalStoreStateProps } from '@/types/modal.type'
import type { IZustandProps } from '@/types/zustand.type'

type StateType = Pick<IModalStoreStateProps, 'statusModal'>

const setModalStoreActions = (set: IZustandProps<IModalStoreProps>): IModalStoreActionProps => ({
  setStatusModal: (key, value) =>
    set((state: StateType) => {
      return {
        statusModal: {
          ...state.statusModal,
          [key]: value
        }
      }
    }),
  setAdminModal: (key, value) =>
    set((state: Pick<IModalStoreStateProps, 'admin'>) => {
      return {
        admin: {
          ...state.admin,
          [key]: value
        }
      }
    })
})

export default setModalStoreActions
