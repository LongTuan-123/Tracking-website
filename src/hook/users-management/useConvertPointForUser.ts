import { useMutation } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { IResponse } from '@/types/common.type'

const convertPoint = async (userId: number, amount: number) => {
  // TODO: Update function
  const response = await axiosInstance.post<IResponse<{ success: boolean }>>(`/admin/users/${userId}/convert-point`, {
    amount
  })

  if (response.data.statusCode === '00000') {
    return response.data.data
  }

  return null
}

const useConvertPointForUser = () => {
  return useMutation({
    mutationFn: ({ userId, amount }: { userId: number; amount: number }) => convertPoint(userId, amount)
  })
}

export default useConvertPointForUser
