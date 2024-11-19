import type { Meta, StoryObj } from '@storybook/react'

import RadioGroupDemo from './radio-group'

const meta: Meta<typeof RadioGroupDemo> = {
  component: RadioGroupDemo,
  title: 'Components/RadioGroupDemo',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'default',
  },
  render: args => <RadioGroupDemo {...args} />,
}

export const Comfortable: Story = {
  args: {
    defaultValue: 'comfortable',
  },
  render: args => <RadioGroupDemo {...args} />,
}

export const Compact: Story = {
  args: {
    defaultValue: 'compact',
  },
  render: args => <RadioGroupDemo {...args} />,
}
