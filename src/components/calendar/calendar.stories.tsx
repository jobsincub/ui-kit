import type { Meta, StoryObj } from '@storybook/react'
import type { DateRange, Mode } from 'react-day-picker'

import { useState } from 'react'

import { format } from 'date-fns'

import { Calendar } from './calendar'

const options: Mode[] = ['single', 'range', 'multiple']

const meta = {
  argTypes: {
    mode: {
      control: { type: 'select' },
      options,
    },
  },
  component: Calendar,
  tags: ['autodocs'],
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  render: args => {
    return <Calendar {...args} />
  },
}

export const Single: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date>()

    return (
      <>
        <Calendar mode={'single'} onSelect={setDate} selected={date} />
        <div style={{ color: 'white' }}>
          {date ? format(date, 'dd/MM/yyyy') : format(new Date(), 'dd/MM/yyyy')}
        </div>
      </>
    )
  },
}

export const Range: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<DateRange>()

    return (
      <>
        <Calendar mode={'range'} onSelect={setDate} selected={date} />
        <div style={{ color: 'white' }}>
          {date?.to && date.from
            ? `${format(date.from, 'dd/MM/yyyy')} - ${format(date.to, 'dd/MM/yyyy')}`
            : format(new Date(), 'dd/MM/yyyy')}
        </div>
      </>
    )
  },
}
