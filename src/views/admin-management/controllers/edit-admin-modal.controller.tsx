import { useForm } from 'react-hook-form'

import useEditAdmin from '@/hook/admin-management/useEditAdmin'

const column = [
  {
    id: 'userId',
    key: 'userId',
    label: 'ID'
  },
  {
    id: 'userName',
    key: 'userName',
    label: 'Name'
  },
  {
    id: 'status',
    key: 'status',
    label: 'Status'
  }
]

const useEditAdminModalController = () => {
  const { mutate: editAdmin } = useEditAdmin()

  const formEditAdmin = useForm<any>({
    mode: 'onChange',
    defaultValues: {
      id: 12
    }
  })

  const handleSubmitForm = async (data: any) => {
    editAdmin(data)
  }

  const handleChangePagination = () => {}
  const handleActionTable = () => {}
  const handleCheckRowId = () => {}

  return { column, formEditAdmin, handleCheckRowId, handleSubmitForm, handleChangePagination, handleActionTable }
}

export default useEditAdminModalController
