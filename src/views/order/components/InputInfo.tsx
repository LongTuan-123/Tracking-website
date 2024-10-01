import { TextField, Typography } from '@mui/material'

type InputInfoProps = {
  title: string
  value: string
  className?: string
}

const InputInfo = ({ title, value, className }: InputInfoProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Typography className='text-[14px] font-bold'>{title}</Typography>
      <TextField className='text-[12px]' inputProps={{ readOnly: true }} value={value} size='small' />
    </div>
  )
}

export default InputInfo
