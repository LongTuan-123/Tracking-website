import { Controller, useFormContext } from 'react-hook-form'

import { TextField } from '@mui/material'

import type { ITextFieldForm } from '@/types/form.type'

const TextFieldForm = (props: ITextFieldForm) => {
  const methods = useFormContext()
  const { name, placeholder, autoFocus, label, required, type, disable } = props

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => {
        const { value, onChange } = field

        const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value)
        }

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label>
              <span>{label}</span>
              {required && <span style={{ color: 'red', marginLeft: '2px' }}>*</span>}
            </label>
            <TextField
              type={type}
              disabled={disable}
              autoFocus={autoFocus}
              value={value}
              onChange={handleChangeInput}
              placeholder={placeholder}
              InputProps={{
                sx: {
                  padding: '10px',
                  '& input:not(.MuiInputBase-inputMultiline, .MuiInputBase-inputAdornedStart)': {
                    paddingBlock: 'unset'
                  }
                }
              }}
            />
          </div>
        )
      }}
    />
  )
}

export default TextFieldForm
