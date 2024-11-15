import React, { ComponentProps, ElementType, ReactNode } from 'react'

export type PropsOf<TTag extends ElementType> = ComponentProps<TTag>

export type TypographyProps<TTag extends ElementType> = {
  as?: TTag
  children: ReactNode
} & PropsOf<TTag>

export const Typography = React.forwardRef<HTMLElement, TypographyProps<ElementType>>(
  ({ as: Component = 'span', children, ...rest }, ref) => {
    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)
