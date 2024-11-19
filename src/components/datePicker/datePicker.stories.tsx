import type { Meta, StoryObj } from '@storybook/react'
import type { DateRange } from 'react-day-picker'

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
    const [date, setDate] = useState<Date>(new Date())

    return <DatePicker mode={'single'} onSelect={setDate} selected={date} />
  },
}

export const Range: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<DateRange>({ from: new Date(), to: new Date() })

    return <DatePicker mode={'range'} onSelect={setDate} selected={date} />
  },
}

// export const WithState: Story = {
//   args: {},
//   render: () => {
//     const handler = (date: Date) => {
//       alert('Успех, вторая дата')
//     }
//
//     return <Test mode={'single'} onDateSelect={handler} />
//   },
// }
