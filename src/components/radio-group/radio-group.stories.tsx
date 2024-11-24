import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup, RadioGroupItem } from './'

const meta = {
  argTypes: {
    asChild: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    name: {
      description: 'The name used when using this component inside a form',
    },
    onValueChange: { description: '(value: string) => void' },
    value: { description: 'string' },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: args => {
    const items = [
      { id: 'r1', label: 'Default', value: 'default' },
      { id: 'r2', label: 'Comfortable', value: 'comfortable' },
      { id: 'r3', label: 'Compact', value: 'compact' },
    ]
    const [value, setValue] = useState<string>()

    console.log({ value })

    return (
      <>
        <RadioGroup {...args} onValueChange={setValue} value={value}>
          {items.map(item => (
            <div
              key={item.id}
              style={{
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <RadioGroupItem
                htmlFor={item.id}
                id={item.id}
                label={item.label}
                value={item.value}
              />
            </div>
          ))}
        </RadioGroup>
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => {
    const items = [
      { id: 'r4', label: 'Disabled 1', value: 'disabled1' },
      { id: 'r5', label: 'Disabled 2', value: 'disabled2' },
      { id: 'r6', label: 'Disabled 3', value: 'disabled3' },
    ]

    return (
      <RadioGroup {...args}>
        {items.map(item => (
          <div
            key={item.id}
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <RadioGroupItem htmlFor={item.id} id={item.id} label={item.label} value={item.value} />
          </div>
        ))}
      </RadioGroup>
    )
  },
}
