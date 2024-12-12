import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './dialog.module.scss'

import CloseIcon from '../../assets/icons/components/common/close'

const Dialog = DialogPrimitive.Root

const DialogTrigger = forwardRef<
  ElementRef<typeof DialogPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ asChild = true, ...props }, ref) => (
  <DialogPrimitive.Trigger asChild={asChild} ref={ref} {...props} />
))

const DialogPortal = DialogPrimitive.Portal

const DialogClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ asChild = true, ...props }, ref) => (
  <DialogPrimitive.Close asChild={asChild} ref={ref} {...props} />
))

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay className={clsx(s.overlay, className)} ref={ref} {...props} />
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content className={clsx(s.content, className)} ref={ref} {...props} />
  </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogCloseIcon = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close className={clsx(s.close, className)} ref={ref} {...props}>
    <CloseIcon className={s.closeIcon} />
    <span className={s.srOnly}>Close</span>
  </DialogPrimitive.Close>
))

DialogCloseIcon.displayName = 'DialogCloseIcon'

type DialogHeaderProps = HTMLAttributes<HTMLDivElement> & {
  isCloseIconVisible?: boolean
}

const DialogHeader = ({
  children,
  className,
  isCloseIconVisible = true,
  ...props
}: DialogHeaderProps) => (
  <div className={clsx(s.header, className)} {...props}>
    {children}
    {isCloseIconVisible && <DialogCloseIcon />}
  </div>
)

DialogHeader.displayName = 'DialogHeader'

const DialogBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(s.body, className)} {...props} />
)

DialogBody.displayName = 'DialogBody'

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(s.footer, className)} {...props} />
)

DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title className={clsx(s.title, className)} ref={ref} {...props} />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description className={clsx(s.description, className)} ref={ref} {...props} />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
