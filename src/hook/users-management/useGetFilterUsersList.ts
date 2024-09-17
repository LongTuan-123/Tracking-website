import { useQuery } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { IFilterUsersProps } from '@/types/users-management/user-props.type'
import type { IFilterUsersResponse } from '@/types/users-management/user-response.type'
import { ReactQueryKey } from '@/utils/keys'

const getFilterUsersList = async (filter: IFilterUsersProps) => {
  const response = await axiosInstance.post<IFilterUsersResponse>('/admin/filter-users', filter)

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

const useGetFilterUsersList = (filter: IFilterUsersProps) => {
  return useQuery({
    queryKey: [ReactQueryKey.FILTER_USER, filter],
    queryFn: () => getFilterUsersList(filter),
    refetchOnWindowFocus: false
  })
}

export default useGetFilterUsersList
