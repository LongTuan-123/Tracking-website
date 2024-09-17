import type { IFilterStoreStateProps } from '@/types/filter.type'
import type {} from '@/types/modal.type'

export const initialModalStoreValue: IFilterStoreStateProps = {
  filter: {
    keyword: '',
    page: 0,
    size: 10
  }
}
