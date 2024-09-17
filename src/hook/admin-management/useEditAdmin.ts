import { useMutation, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { ICreateAdminProps } from '@/types/admin-management/admin-props.type'
import type { IResponse } from '@/types/common.type'
import { ReactQueryKey } from '@/utils/keys'

const editAdmin = async (adminData: ICreateAdminProps) => {
  // TODO: Update function
  const response = await axiosInstance.post<IResponse<{ success: boolean }>>(`/boss/change-admin-password`, adminData)

  if (response.data.statusCode === '00000') {
    return response.data.data
  }

  return null
}

const useEditAdmin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: editAdmin,
    onSuccess: (data) => {
      if (data?.success) {
        void queryClient.invalidateQueries({ queryKey: [ReactQueryKey.LIST_ADMIN] })
      }
    }
  })
}

export default useEditAdmin
