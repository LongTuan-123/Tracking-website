import { useMutation } from '@tanstack/react-query'

import axiosInstance from '@/@core/common/axios'
import type { IResponse } from '@/types/common.type'

const withdraw = async (userId: number, amount: number) => {
  // TODO: Update function
  const response = await axiosInstance.post<IResponse<{ success: boolean }>>(`/admin/users/${userId}/withdraw`, {
    amount
  })

  if (response.data.statusCode === '00000') {
    return response.data.data
  }

  return null
}

const useWithdrawForUser = () => {
  return useMutation({
    mutationFn: ({ userId, amount }: { userId: number; amount: number }) => withdraw(userId, amount)
  })
}

export default useWithdrawForUser
