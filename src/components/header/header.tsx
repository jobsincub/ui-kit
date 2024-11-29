import { ComponentProps, forwardRef } from 'react'

export type HeaderProps = ComponentProps<'header'>

export const Header = forwardRef<HTMLElement, HeaderProps>(({ children, ...props }, ref) => (
  <header ref={ref} {...props}>
    {children}
  </header>
))
