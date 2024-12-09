import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import {
  Dialog,
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
            <DialogTitle>Log Out</DialogTitle>
            <DialogDescription>
              Are you really want to log out of your account “Epam@epam.com”?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Yes</Button>
            <Button>No</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
}
