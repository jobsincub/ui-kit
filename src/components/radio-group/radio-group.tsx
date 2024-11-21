import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...props} ref={ref} />
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props} />
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator className={clsx(s.indicator, className)} ref={ref} {...props} />
  )
})

RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName

export { RadioGroup, RadioGroupIndicator, RadioGroupItem }
