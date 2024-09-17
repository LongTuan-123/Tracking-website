'use client'

import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

import { LoadingButton } from '@mui/lab'

import { UserStatus, type IFilterUsersContent } from '@/types/users-management/user-response.type'
import type { UserDialogType } from '@/types/table.type'
import { Transition } from './Transition'
import useUpdateUserStatus from '@/hook/users-management/useUpdateUserStatus'
import { notify, ToastType } from '@/utils/toast'

type Props = {
  open: boolean
  data: IFilterUsersContent
  onOpen: (type: UserDialogType) => void
  onClose: () => void
}

export const BlockDialog: React.FC<Props> = ({ open, data, onOpen, onClose }) => {
  const { isPending, mutate } = useUpdateUserStatus()

  const onOpenDialog = () => {
    onOpen('block')
  }

  const onBlockUser = () => {
    mutate(
      { username: data.userName, status: UserStatus.BLOCKED },
      {
        onSuccess: () => {
          notify({ type: ToastType.SUCCESS, content: 'Block user successfully' })
        },
        onSettled: () => {
          onClose()
        }
      }
    )
  }

  return (
    <>
      <Button variant='contained' color='error' className='min-w-fit' onClick={onOpenDialog}>
        Block
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby='block-user-dialog'
      >
        <DialogTitle>{`Are you sure to block user ${data.userName}?`}</DialogTitle>

        <DialogActions>
          <Button disabled={isPending} onClick={onClose}>
            Cancel
          </Button>
          {isPending ? (
            <LoadingButton loading={isPending} loadingPosition='start'>
              Updating
            </LoadingButton>
          ) : (
            <Button variant='contained' color='error' onClick={onBlockUser}>
              Block
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}
