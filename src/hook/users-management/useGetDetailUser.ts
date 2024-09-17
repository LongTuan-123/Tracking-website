import { useQuery } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { IDetailUserResponse, IFilterUsersContent } from '@/types/users-management/user-response.type'
import { ReactQueryKey } from '@/utils/keys'

const getDetailUser = async (userId: string) => {
  const response = await axiosInstance.get<IDetailUserResponse>(`/admin/users/${userId}`)

  if (response.data.statusCode === '00000') {
    return response.data.data
  }

  return null
}

const useGetDetailUser = (userId: string) => {
  return useQuery({
    queryKey: [ReactQueryKey.DETAIL_USER, userId],
    queryFn: () => getDetailUser(userId),
    refetchOnWindowFocus: false,
    staleTime: 3600 * 1000
  })
}

export const DefaultUser: IFilterUsersContent = {
  userId: 0,
  userName: '',
  phone: '',
  fullName: '',
  email: '',
  nationality: '',
  birthday: '',
  refererUsername: '',
  status: '',
  totalUsdtTree: 0,
  mmAmt: 0,
  usdtAmt: 0,
  unopenedCodeCount: 0,
  updatedAt: '',
  updatedBy: ''
}

export default useGetDetailUser
