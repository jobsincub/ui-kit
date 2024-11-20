import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export const tabsVariant = ['primary', 'secondary'] as const

export type TabsVariant = (typeof tabsVariant)[number]

const Root = forwardRef<
  ElementRef<typeof TabsPrimitive.Root>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ asChild = false, defaultValue, ...props }, ref) => (
  <TabsPrimitive.Root
    asChild={asChild}
    className={s.Root}
    defaultValue={defaultValue}
    ref={ref}
    {...props}
  />
))

Root.displayName = TabsPrimitive.Root.displayName

const List = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ asChild = false, ...props }, ref) => (
  <TabsPrimitive.List asChild={asChild} className={s.List} ref={ref} {...props} />
))

List.displayName = TabsPrimitive.List.displayName

const Trigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ asChild = false, className = 'primary', disabled = false, value, ...props }, ref) => (
  <TabsPrimitive.Trigger
    asChild={asChild}
    className={s[className] + ' ' + s.Trigger}
    disabled={disabled}
    ref={ref}
    value={value}
    {...props}
  />
))

Trigger.displayName = TabsPrimitive.Trigger.displayName

const Content = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ asChild = false, value, ...props }, ref) => (
  <TabsPrimitive.Content
    asChild={asChild}
    className={s.Content}
    ref={ref}
    value={value}
    {...props}
  />
))

Content.displayName = TabsPrimitive.Content.displayName

export { Content, List, Root, Trigger }
