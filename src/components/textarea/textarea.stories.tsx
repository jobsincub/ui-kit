import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary'],
    },
  },
  component: Textarea,
  tags: ['autodocs'],
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    labelText: 'Text-area',
    placeholder: 'Text-area',
    variant: 'primary',
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    error: true,
    errorText: 'Error text',
    labelText: 'Text-area',
    placeholder: 'Placeholder text',
    variant: 'primary',
  },
}
