import React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  (props, ref) => {
    return <input ref={ref} {...props} />
  }
)
