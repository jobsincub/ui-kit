import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((props, ref) => {
  return <RadioGroupPrimitive.Root {...props} ref={ref} />
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
  return <RadioGroupPrimitive.Item ref={ref} {...props} />
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>((props, ref) => {
  return <RadioGroupPrimitive.Indicator ref={ref} {...props} />
})

RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName

export { RadioGroup, RadioGroupIndicator, RadioGroupItem }
