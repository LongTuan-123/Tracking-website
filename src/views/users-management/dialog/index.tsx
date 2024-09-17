'use client'

import { useState } from 'react'

import type { IFilterUsersContent } from '@/types/users-management/user-response.type'
import { BlockDialog } from './BlockDialog'
import { UnblockDialog } from './UnblockDialog'
import { BuyCodeDialog } from './BuyCodeDialog'
import { DepositDialog } from './DepositDialog'
import { WithdrawDialog } from './WithdrawDialog'
import { ConvertPointDialog } from './ConvertDialog'
import type { UserDialogType } from '@/types/table.type'

type Props = {
  data: IFilterUsersContent
  handleAction: (type: string, data: IFilterUsersContent) => void
}

export const UserActionDialog: React.FC<Props> = ({ data, handleAction }) => {
  const [dialogType, setDialogType] = useState<UserDialogType | null>(null)

  const onOpen = (type: UserDialogType) => {
    setDialogType(type)
  }

  const onClose = () => {
    handleAction && handleAction('close', data)
    setDialogType(null)
  }

  return (
    <div className='flex items-center gap-4 flex-wrap'>
      <BlockDialog open={dialogType === 'block'} data={data} onOpen={onOpen} onClose={onClose} />
      <UnblockDialog open={dialogType === 'unblock'} data={data} onOpen={onOpen} onClose={onClose} />
      <BuyCodeDialog open={dialogType === 'buy-code'} data={data} onOpen={onOpen} onClose={onClose} />
      <DepositDialog open={dialogType === 'deposit'} data={data} onOpen={onOpen} onClose={onClose} />
      <WithdrawDialog open={dialogType === 'withdraw'} data={data} onOpen={onOpen} onClose={onClose} />
      <ConvertPointDialog open={dialogType === 'convert-point'} data={data} onOpen={onOpen} onClose={onClose} />
    </div>
  )
}
