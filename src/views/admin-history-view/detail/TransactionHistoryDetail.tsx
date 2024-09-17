import { useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize, TextField } from '@mui/material'

import type { IFilteredAdminHistoryView } from '@/types/admin-history-view/admin-history-response.type'
import { Transition } from '@/views/users-management/dialog/Transition'

type Props = {
  data: IFilteredAdminHistoryView
}

export const TransactionHistoryDetail: React.FC<Props> = ({ data }) => {
  // Get transaction detail
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const onOpen = () => {
    setOpenDialog(true)
  }

  const onClose = () => {
    setOpenDialog(false)
  }

  return (
    <div>
      <button
        className='min-w-fit bg-transparent hover:underline transition text-primary cursor-pointer'
        onClick={onOpen}
      >
        {data.id}
      </button>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby='tx-detail-dialog'
        onClose={onClose}
      >
        <DialogTitle>{`Transaction detail #${data.id}`}</DialogTitle>
        <DialogContent className='flex flex-wrap items-center gap-4 min-w-[500px] py-6'>
          <TextField disabled={true} id='adminId' label='BossID/AdminID' defaultValue={data.adminId} />
          <TextField disabled={true} id='userId' label='UserID' defaultValue={data.userId} />
          <TextField disabled={true} id='action' label='Action' defaultValue={data.action} />
          <div className='flex flex-col gap-2'>
            <label>Detail TX</label>
            <TextareaAutosize
              disabled={true}
              id='detail'
              className='text-white min-w-[400px]'
              minRows={3}
              defaultValue={data.detail}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
