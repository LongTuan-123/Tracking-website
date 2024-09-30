import type { ICommonState } from '@/types/zustand/orders.type'

export const actions = (set: (partial: Partial<ICommonState>) => void): Pick<ICommonState, 'setWaypoints'> => ({
  setWaypoints: (waypoints: number[][]) => {
    set({ waypoints })
  }
})
