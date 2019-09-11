// Packages
import { CSSProperties } from 'react'

export interface TextFieldProps {
  disabled: boolean
  label?: string
  name: string
  onChange?: (e?: any) => void
  onFocus?: (e?: any) => void
  placeholder: string
  readOnly: boolean
  style?: CSSProperties
  type: 'text' | 'email'
  value?: string
}
