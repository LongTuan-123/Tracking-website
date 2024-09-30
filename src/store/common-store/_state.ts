import type { ICommonState } from '@/types/zustand/orders.type'

export const initialState: Pick<ICommonState, 'waypoints'> = {
  waypoints: []
}
