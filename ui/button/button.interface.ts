// Packages
import { CSSProperties } from 'react'

interface ButtonSkin {
  appearance: 'primary' | 'primary-subtle'
  block: boolean
  children: any
  disabled: boolean
  outline: boolean
  size: 'small' | 'medium' | 'large'
  style?: CSSProperties
}

export interface ButtonProps extends ButtonSkin {
  onClick?: (e: any) => void
  type: 'button' | 'submit' | 'reset'
}

export interface ButtonHrefProps extends ButtonSkin {
  href: string
}

export interface ButtonLinkProps extends ButtonHrefProps {
  as?: string
}
