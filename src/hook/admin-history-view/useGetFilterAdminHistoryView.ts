import { useQuery } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import { ReactQueryKey } from '@/utils/keys'
import type { IFilterAdminHistoryViewProps } from '@/types/admin-history-view/admin-history-props.type'
import type { IFilterAdminHistoryViewResponse } from '@/types/admin-history-view/admin-history-response.type'

const getFilterAdminHistoryView = async (filter: IFilterAdminHistoryViewProps) => {
  const response = await axiosInstance.post<IFilterAdminHistoryViewResponse>('/admin/filter-admin-history-view', filter)

  if (response.data.statusCode === '00000') {
    return {
      data: response.data.data.content,
      pagination: {
        total: response.data.data.totalElements,
        page: response.data.data.pageable.pageNumber,
        size: response.data.data.pageable.pageSize
      }
    }
  } else {
    return {
      data: [],
      pagination: {
        total: 0,
        page: 0,
        size: 0
      }
    }
  }
}

const useGetFilterAdminHistoryView = (filter: IFilterAdminHistoryViewProps) => {
  return useQuery({
    queryKey: [ReactQueryKey.FILTER_ADMIN_HISTORY_VIEW, filter],
    queryFn: () => getFilterAdminHistoryView(filter),
    refetchOnWindowFocus: false
  })
}

export default useGetFilterAdminHistoryView
