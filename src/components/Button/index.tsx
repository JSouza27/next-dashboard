import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import theme from 'styles/theme'

export interface ButtonProps extends ButtonHTMLAttributes<Element> {
  children?: React.ReactNode
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
  fontSize?: string
  fontWeight?: keyof typeof theme.font
  height?: string
  outline?: true | false
  width?: string
}

export default function Button({ children, ...props }: ButtonProps) {
  return <S.CustomButton {...props}>{children}</S.CustomButton>
}
