import { Button } from '@mui/material'

import type { IFilterUsersContent } from '@/types/users-management/user-response.type'

type IRenderActionProps = { data: IFilterUsersContent; action: (type: string, data: IFilterUsersContent) => void }

const RenderAction = ({ data, action }: IRenderActionProps) => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button type='button' variant='contained' color='error' onClick={() => ''}>
        Block
      </Button>
      <Button type='button' variant='contained' color='primary' onClick={() => ''}>
        Unblock
      </Button>
      <Button
        type='button'
        variant='contained'
        color='secondary'
        onClick={() => {
          action('edit', data)
        }}
      >
        Edit
      </Button>
    </div>
  )
}

export default RenderAction
