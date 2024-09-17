import type { ReactNode } from 'react'

export interface ITextFieldForm {
  name: string
  label: string
  type?: string
  disable?: boolean
  required?: boolean
  startIcon?: ReactNode
  placeholder?: string
  autoFocus?: boolean
}
