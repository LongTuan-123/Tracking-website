import { create } from 'zustand'

import type { IModalStoreProps } from '@/types/modal.type'
import setModalStoreActions from './_action'
import { initialModalStoreValue } from './_state'

const useModalStore = create<IModalStoreProps>(set => ({
  ...initialModalStoreValue,
  ...setModalStoreActions(set)
}))

export default useModalStore
