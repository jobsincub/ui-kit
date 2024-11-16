import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'

import s from './popover.module.scss'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ asChild = true, ...props }, ref) => (
  <PopoverPrimitive.Trigger asChild={asChild} ref={ref} {...props} />
))

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

const PopoverAnchor = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor>
>(({ asChild = true, ...props }, ref) => (
  <PopoverPrimitive.Anchor asChild={asChild} ref={ref} {...props} />
))

PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName

const PopoverClose = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ asChild = true, ...props }, ref) => (
  <PopoverPrimitive.Close asChild={asChild} ref={ref} {...props} />
))

PopoverClose.displayName = PopoverPrimitive.Close.displayName

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ align = 'center', className, sideOffset = 1, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      className={`${s.popoverContent} ${className}`}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </PopoverPrimitive.Portal>
))

PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger }
