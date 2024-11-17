import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from './calendar'

const meta = {
  argTypes: {},
  component: Calendar,
  tags: ['autodocs'],
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
