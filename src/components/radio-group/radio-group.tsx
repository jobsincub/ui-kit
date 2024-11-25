import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { CheckedIcon } from './assets/icons/CheckedIcon'
import { UncheckedIcon } from './assets/icons/UncheckedIcon'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...props} ref={ref} />
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    htmlFor?: string
    label: string
  }
>(({ className, disabled, htmlFor, label, ...props }, ref) => {
  return (
    <>
      <RadioGroupPrimitive.Item
        className={clsx(s.item, className)}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <UncheckedIcon />
        <RadioGroupPrimitive.Indicator className={s.indicator}>
          <CheckedIcon />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label className={s.label} htmlFor={htmlFor}>
        {label}
      </label>
    </>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
