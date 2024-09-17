import type { IFilterStoreActionProps, IFilterStoreStateProps } from '@/types/filter.type'
import type { IZustandProps } from '@/types/zustand.type'

type StateType = Pick<IFilterStoreStateProps, 'filter'>

const setFilterStoreActions = (set: IZustandProps<IFilterStoreStateProps>): IFilterStoreActionProps => ({
  setFilter: (key, value) =>
    set((state: StateType) => {
      return {
        filter: {
          ...state.filter,
          [key]: value
        }
      }
    })
})

export default setFilterStoreActions
