import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export const tabsVariant = ['primary', 'secondary'] as const

const TabsRoot = forwardRef<
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

TabsRoot.displayName = TabsPrimitive.Root.displayName

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ asChild = false, ...props }, ref) => (
  <TabsPrimitive.List asChild={asChild} className={s.List} ref={ref} {...props} />
))

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ asChild = false, className = 'primary', disabled = false, value, ...props }, ref) => (
  <TabsPrimitive.Trigger
    asChild={asChild}
    className={clsx(s[className], s.Trigger)}
    disabled={disabled}
    ref={ref}
    value={value}
    {...props}
  />
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
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

TabsContent.displayName = TabsPrimitive.Content.displayName

export { TabsContent, TabsList, TabsRoot, TabsTrigger }
