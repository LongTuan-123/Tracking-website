import { useForm } from 'react-hook-form'

import useCreateAdmin from '@/hook/admin-management/useCreateAdmin'
import type { ICreateAdminProps } from '@/types/admin-management/admin-props.type'

const useCreateAdminModalController = () => {
  const { mutate: createAdmin } = useCreateAdmin()

  const formCreateAdmin = useForm<any>({
    mode: 'onChange'
  })

  const handleSubmitForm = async (data: ICreateAdminProps) => {
    createAdmin(data)
  }

  return { formCreateAdmin, handleSubmitForm }
}

export default useCreateAdminModalController
