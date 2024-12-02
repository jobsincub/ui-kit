import { ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'>

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ children, className, ...props }, ref) => (
    <header className={clsx(s.header, className)} ref={ref} {...props}>
      {children}
    </header>
  )
)
