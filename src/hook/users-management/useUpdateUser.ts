import { useMutation, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import { ReactQueryKey } from '@/utils/keys'
import type { IResponse } from '@/types/common.type'

const updateUser = async (userData: IFilterUsersContent) => {
  // TODO: Update function
  const response = await axiosInstance.put<IResponse<{ success: boolean }>>(`/admin/users/${userData.userId}`, userData)

  if (response.data.statusCode === '00000') {
    return response.data.data
  }

  return null
}

const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (userData: IFilterUsersContent) => updateUser(userData),
    onSuccess: (data) => {
      if (data?.success) {
        void queryClient.invalidateQueries({ queryKey: [ReactQueryKey.FILTER_USER] })
      }
    }
  })
}

export default useUpdateUser
