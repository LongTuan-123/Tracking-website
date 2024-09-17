'use client'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

import { LoadingButton } from '@mui/lab'

import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import { Transition } from './Transition'
import type { UserDialogType } from '@/types/table.type'
import useDepositForUser from '@/hook/users-management/useDepositForUser'
import { notify, ToastType } from '@/utils/toast'

type Props = {
  open: boolean
  data: IFilterUsersContent
  onOpen: (type: UserDialogType) => void
  onClose: () => void
}

export const DepositDialog: React.FC<Props> = ({ open, data, onOpen, onClose }) => {
  const { isPending, mutate } = useDepositForUser()

  const onOpenDialog = () => {
    onOpen('deposit')
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries((formData as any).entries())
    const amount = formJson.amount

    mutate(
      { userId: data.userId, amount },
      {
        onSuccess: () => {
          notify({ type: ToastType.SUCCESS, content: 'Deposit for user successfully' })
        },
        onSettled: () => {
          onClose()
        }
      }
    )
  }

  return (
    <>
      <Button variant='contained' color='success' className='min-w-fit' onClick={onOpenDialog}>
        Deposit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby='deposit-user-dialog'
        PaperProps={{
          component: 'form',
          onSubmit
        }}
      >
        <DialogTitle>{`Deposit money for user ${data.userName}`}</DialogTitle>

        <DialogContent>
          <DialogContentText>Enter the amount to deposit below.</DialogContentText>
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
            <Button variant='contained' color='primary' type='submit'>
              Deposit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}
