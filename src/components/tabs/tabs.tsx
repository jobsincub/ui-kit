import {type ComponentPropsWithoutRef, type ElementRef, forwardRef} from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import s from './tabs.module.scss'


export const tabsVariant = ['primary', 'secondary'] as const

export type TabsVariant = (typeof tabsVariant)[number]


const Root = forwardRef<
    ElementRef<typeof TabsPrimitive.Root>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({asChild = false, defaultValue, ...props}, ref) => (
    <TabsPrimitive.Root asChild={asChild} defaultValue = {defaultValue} className={s.Root} ref={ref} {...props} />
))

Root.displayName = TabsPrimitive.Root.displayName

const List = forwardRef<
    ElementRef<typeof TabsPrimitive.List>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({asChild = false, ...props}, ref) => (
    <TabsPrimitive.List asChild={asChild} className={s.List} ref={ref} {...props}/>
))

List.displayName = TabsPrimitive.List.displayName

const Trigger = forwardRef<
    HTMLButtonElement,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({asChild = false, className = "primary", value, disabled = false, ...props}, ref) => (
    <TabsPrimitive.Trigger asChild={asChild} value={value} disabled = {disabled} ref={ref} className={s[className] + " " + s.Trigger} {...props} />
))

Trigger.displayName = TabsPrimitive.Trigger.displayName

const Content = forwardRef<
    ElementRef<typeof TabsPrimitive.Content>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({asChild = false, value, ...props}, ref) => (
    <TabsPrimitive.Content asChild={asChild} value={value} className={s.Content} ref={ref} {...props}/>
))

Content.displayName =TabsPrimitive.Content.displayName

export {Root, List, Content, Trigger}


