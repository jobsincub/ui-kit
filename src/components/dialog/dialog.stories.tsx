import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Log Out</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle style={{ margin: 0 }}>Log Out</DialogTitle>
          </DialogHeader>
          <DialogBody style={{ paddingTop: '30px' }}>
            <DialogDescription style={{ margin: '0 0 30px' }}>
              Are you really want to log out of your account{' '}
              <span style={{ fontWeight: 700 }}>“Epam@epam.com”</span>?
            </DialogDescription>
            <DialogFooter>
              <DialogClose>
                <Button variant={'tertiary'}>Yes</Button>
              </DialogClose>
              <DialogClose>
                <Button>No</Button>
              </DialogClose>
            </DialogFooter>
          </DialogBody>
        </DialogContent>
      </>
    ),
  },
}
