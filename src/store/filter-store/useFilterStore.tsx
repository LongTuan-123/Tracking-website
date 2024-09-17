import { create } from 'zustand'

import { initialModalStoreValue } from './_state'
import setFilterStoreActions from './_action'
import type { IFilterStoreProps } from '@/types/filter.type'

const useFilterStore = create<IFilterStoreProps>((set) => ({
  ...initialModalStoreValue,
  ...setFilterStoreActions(set)
}))

export default useFilterStore
