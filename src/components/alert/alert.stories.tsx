import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['error', 'completed'],
    },
  },
  component: Alert,
  tags: ['autodocs'],
  title: 'Components/Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Error: Story = {
  args: {
    message: 'Error! Server is not available',
    type: 'error',
  },
}

export const Completed: Story = {
  args: {
    message: 'Your settings are saved',
    type: 'completed',
  },
}
