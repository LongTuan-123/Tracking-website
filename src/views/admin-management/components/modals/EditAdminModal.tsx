// eslint-disable-next-line import/no-unresolved
import { useEffect } from 'react'

import ClearIcon from '~/svg/clear.svg'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'

import { FormProvider } from 'react-hook-form'

import TextFieldForm from '@/components/layout/shared/forms/TextFieldForm'
import useModalStore from '@/store/modal-store/useModalStore'
import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import useEditAdminModalController from '../../controllers/edit-admin-modal.controller'

type IEditModal = {
  data: IFilterUsersContent | undefined
}

const EditAdminModal = ({ data }: IEditModal) => {
  const { admin, setAdminModal } = useModalStore()

  const { formEditAdmin, handleSubmitForm } = useEditAdminModalController()

  console.log('data', data)
  useEffect(() => {
    if (!data) return
    formEditAdmin.reset({
      id: data.userId,
      name: data.userName,
      password: '1222'
    })
  }, [data])

  return (
    <Dialog
      open={admin.edit}
      scroll={'body'}
      onClose={() => {
        setAdminModal('edit', false)
      }}
    >
      <FormProvider {...formEditAdmin}>
        <form onSubmit={formEditAdmin.handleSubmit(handleSubmitForm)}>
          <DialogTitle id='scroll-dialog-title' className='flex items-center justify-between'>
            <span>Edit admin information</span>
            <IconButton
              style={{ marginBottom: '20px' }}
              onClick={() => {
                setAdminModal('edit', false)
              }}
            >
              <ClearIcon height='12px' width='12px' />
            </IconButton>
          </DialogTitle>
          <DialogContent className='flex gap-2 flex-col'>
            <TextFieldForm name='id' label='ID' disable />
            <TextFieldForm name='name' placeholder='Enter...' label='Name' required />
            <TextFieldForm name='password' placeholder='Enter...' label='Password' type='password' required />
            {/* <RadioChangeStatus name='status' />
            <EnhancedTable
              data={[]}
              pagination={{
                page: 0,
                limit: 10,
                handleChangePagination
              }}
              columns={column}
              actions={handleActionTable}
              hasCheckBox={false}
            /> */}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                formEditAdmin.reset()
                setAdminModal('edit', false)
              }}
            >
              Cancel
            </Button>
            <Button type='submit' variant='contained'>
              Edit
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}

export default EditAdminModal
