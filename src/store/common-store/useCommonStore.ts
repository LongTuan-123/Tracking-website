import { create } from 'zustand'

import type { ICommonState } from '@/types/zustand/orders.type'

import { initialState } from './_state'
import { actions } from './_actions'

const useCommonStore = create<ICommonState>()((set) => ({
  ...initialState,
  ...actions(set)
}))

export default useCommonStore
