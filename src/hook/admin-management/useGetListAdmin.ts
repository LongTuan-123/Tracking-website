import { useQuery } from '@tanstack/react-query'

import type { IAdminResponse } from './../../types/admin-management/admin-respone.type'

import axiosInstance from '@/@core/common/axios'
import type { IFilterAdminProps } from '@/types/admin-management/admin-props.type'
import { ReactQueryKey } from '@/utils/keys'

const getListAdmin = async (filter: IFilterAdminProps) => {
  const response = await axiosInstance.post<IAdminResponse>(`/admin/filter-transactions`, filter)

  if (response.data.statusCode === '00000') {
    return response.data.data
  } else {
    return null
  }
}

const useGetListAdmin = (filter: IFilterAdminProps) => {
  return useQuery({
    queryKey: [ReactQueryKey.LIST_ADMIN, filter],
    queryFn: () => getListAdmin(filter),
    refetchOnWindowFocus: false
  })
}

export default useGetListAdmin
