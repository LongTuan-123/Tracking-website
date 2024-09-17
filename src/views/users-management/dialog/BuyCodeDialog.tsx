'use client'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

import { LoadingButton } from '@mui/lab'

import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import type { UserDialogType } from '@/types/table.type'
import { Transition } from './Transition'
import useBuyCodeForUser from '@/hook/users-management/useBuyCodeForUser'
import { notify, ToastType } from '@/utils/toast'

type Props = {
  open: boolean
  data: IFilterUsersContent
  onOpen: (type: UserDialogType) => void
  onClose: () => void
}

export const BuyCodeDialog: React.FC<Props> = ({ open, data, onOpen, onClose }) => {
  const { isPending, mutate } = useBuyCodeForUser()

  const onOpenDialog = () => {
    onOpen('buy-code')
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
          notify({ type: ToastType.SUCCESS, content: 'Buy code for user successfully' })
        },
        onSettled: () => {
          onClose()
        }
      }
    )
  }

  return (
    <>
      <Button variant='contained' color='secondary' className='min-w-fit' onClick={onOpenDialog}>
        Buy code
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby='buy-code-user-dialog'
        PaperProps={{
          component: 'form',
          onSubmit
        }}
      >
        <DialogTitle>{`Buy code for user ${data.userName}`}</DialogTitle>

        <DialogContent>
          <DialogContentText>Enter the code amount to buy below.</DialogContentText>
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
              Updating
            </LoadingButton>
          ) : (
            <Button variant='contained' color='secondary' type='submit'>
              Buy
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}
