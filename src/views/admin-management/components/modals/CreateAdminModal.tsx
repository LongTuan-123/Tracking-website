// eslint-disable-next-line import/no-unresolved
import ClearIcon from '~/svg/clear.svg'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'

import { FormProvider } from 'react-hook-form'

import TextFieldForm from '@/components/layout/shared/forms/TextFieldForm'
import useModalStore from '@/store/modal-store/useModalStore'
import useCreateAdminModalController from '../../controllers/create-admin-modal.controller'

const CreateAdminModal = () => {
  const { admin, setAdminModal } = useModalStore()
  const { formCreateAdmin, handleSubmitForm } = useCreateAdminModalController()

  return (
    <Dialog
      open={admin.create}
      scroll={'body'}
      onClose={() => {
        setAdminModal('create', false)
      }}
    >
      <FormProvider {...formCreateAdmin}>
        <form onSubmit={formCreateAdmin.handleSubmit(handleSubmitForm)}>
          <DialogTitle id='scroll-dialog-title' className='flex items-center justify-between'>
            <span>Add new admin</span>
            <IconButton
              style={{ marginBottom: '20px' }}
              onClick={() => {
                setAdminModal('create', false)
              }}
            >
              <ClearIcon height='12px' width='12px' />
            </IconButton>
          </DialogTitle>
          <DialogContent className='flex gap-2 flex-col'>
            <TextFieldForm name='name' placeholder='Enter...' label='Name' required />
            <TextFieldForm name='password' placeholder='Enter...' label='Password' type='password' required />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                formCreateAdmin.reset()
                setAdminModal('create', false)
              }}
            >
              Cancel
            </Button>
            <Button type='submit' variant='contained'>
              Create
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}

export default CreateAdminModal
