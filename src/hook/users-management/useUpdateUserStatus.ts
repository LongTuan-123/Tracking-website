import { useMutation, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { UserStatus } from '@/types/users-management/user-response.type'
import type { IResponse } from '@/types/common.type'

import { ReactQueryKey } from '@/utils/keys'

const updateUserStatus = async (username: string, status: UserStatus) => {
  // TODO: Update function
  const response = await axiosInstance.post<IResponse<{ success: boolean }>>(
    `/admin/change-account-status?username=${username}&status=${status}`
  )

  if (response.data.statusCode === '00000') {
    return response.data.data
  }

  return null
}

// Only use for block/unblock user
const useUpdateUserStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ username, status }: { username: string; status: UserStatus }) => updateUserStatus(username, status),
    onSuccess: (data) => {
      if (data?.success) {
        void queryClient.invalidateQueries({ queryKey: [ReactQueryKey.FILTER_USER] })
      }
    }
  })
}

export default useUpdateUserStatus
