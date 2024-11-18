import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DatePicker } from '../datePicker'

const meta: Meta<typeof DatePicker> = {
  argTypes: {},
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DatePicker',
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Primary: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date>()

    return <DatePicker mode={'single'} onSelect={setDate} selected={date} />
  },
}
