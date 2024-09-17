'use client'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

import { LoadingButton } from '@mui/lab'

import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import type { UserDialogType } from '@/types/table.type'
import { Transition } from './Transition'
import useConvertPointForUser from '@/hook/users-management/useConvertPointForUser'
import { notify, ToastType } from '@/utils/toast'

type Props = {
  open: boolean
  data: IFilterUsersContent
  onOpen: (type: UserDialogType) => void
  onClose: () => void
}

export const ConvertPointDialog: React.FC<Props> = ({ open, data, onOpen, onClose }) => {
  const { isPending, mutate } = useConvertPointForUser()

  const onOpenDialog = () => {
    onOpen('convert-point')
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries((formData as any).entries())
    const amount = formJson.amount

    mutate(
      { userId: data.userId, amount: amount },
      {
        onSuccess: () => {
          notify({ type: ToastType.SUCCESS, content: 'Convert point for user successfully' })
        },
        onSettled: () => {
          onClose()
        }
      }
    )
  }

  return (
    <>
      <Button variant='contained' color='warning' className='min-w-fit' onClick={onOpenDialog}>
        Convert point
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby='convert-point-user-dialog'
        PaperProps={{
          component: 'form',
          onSubmit
        }}
      >
        <DialogTitle>{`Convert point for user ${data.userName}`}</DialogTitle>

        <DialogContent>
          <DialogContentText>Enter the point amount to convert below.</DialogContentText>
          <TextField
            autoFocus
            required
            margin='dense'
            id='amount'
            name='amount'
            label='Amount'
            type='number'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={isPending} onClick={onClose}>
            Cancel
          </Button>

          {isPending ? (
            <LoadingButton loading={isPending} loadingPosition='start'>
              Processing
            </LoadingButton>
          ) : (
            <Button variant='contained' color='warning' type='submit'>
              Convert
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}
