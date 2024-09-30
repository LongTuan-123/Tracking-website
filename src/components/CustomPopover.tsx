import React, { useState } from 'react'

import { Popover, CssBaseline, IconButton } from '@mui/material'

import ThreeDotsIcon from '../@core/svg/ThreeDotsIcon.svg'
import Link from './Link'

type ItemList = {
  id: number
  content: string
  icon?: JSX.Element
  subPath?: string
}

type CustomPopoverProps = {
  itemList: ItemList[]
  orderId: string
  mainRoute?: string
}

const CustomPopover = ({ itemList, orderId, mainRoute }: CustomPopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <CssBaseline />
      <div className='text-center m-5'>
        <IconButton onClick={handleClick}>
          <ThreeDotsIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          <div className='flex flex-col items-center'>
            {itemList.map((item: ItemList) => (
              <Link key={item.id} href={`/${mainRoute}/${orderId}/${item.subPath}`}>
                <div className='flex flex-row items-center gap-4 h-12 min-w-[184px] pl-4 text-sm'>
                  {item.icon}
                  {item.content}
                </div>
              </Link>
            ))}
          </div>
        </Popover>
      </div>
    </>
  )
}

export default CustomPopover
