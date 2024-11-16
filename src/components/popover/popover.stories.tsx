import type { Meta, StoryObj } from '@storybook/react'

import { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger } from './'

const meta: Meta<typeof PopoverContent> = {
  argTypes: {
    align: {
      control: { type: 'select' },
      defaultValue: 'center',
      description: 'Alignment of the PopoverContent relative to the trigger.',
      options: ['start', 'center', 'end'],
    },
    alignOffset: {
      control: { type: 'number' },
      defaultValue: 0,
      description: 'Offset in pixels of the PopoverContent from the trigger alignment.',
    },
    asChild: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, the content will be rendered directly without a container.',
    },
    side: {
      control: { type: 'select' },
      defaultValue: 'bottom',
      description: 'Side where the PopoverContent is displayed, if there are no obstructions.',
      options: ['top', 'bottom', 'left', 'right'],
    },
    sideOffset: {
      control: { type: 'number' },
      defaultValue: 0,
      description:
        'Offset in pixels of the PopoverContent from the preferred side of the' +
        ' PopoverContent.',
    },
  },

  component: PopoverContent,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/PopoverContent',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    align: 'center',
    alignOffset: 0,
    asChild: false,
    side: 'bottom',
    sideOffset: 0,
  },
  render: args => (
    <Popover>
      <PopoverTrigger>
        <button style={{ backgroundColor: 'green' }}>Open</button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <div style={{ backgroundColor: 'blue' }}>
          <p>Content</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const UseAnchor: Story = {
  args: {
    align: 'center',
    alignOffset: 0,
    asChild: false,
    side: 'bottom',
    sideOffset: 1,
  },
  render: args => (
    <Popover>
      <PopoverAnchor>
        <button style={{ backgroundColor: 'purple', marginRight: '200px' }}>Anchor</button>
      </PopoverAnchor>
      <PopoverTrigger>
        <button style={{ backgroundColor: 'green' }}>Open</button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <div style={{ backgroundColor: 'blue' }}>{<p>Content</p>}</div>
      </PopoverContent>
    </Popover>
  ),
}

export const UseCloseButton: Story = {
  args: {
    align: 'center',
    alignOffset: 0,
    asChild: false,
    side: 'bottom',
    sideOffset: 0,
  },
  render: args => (
    <Popover>
      <PopoverClose>
        <button style={{ backgroundColor: 'red', marginRight: '200px' }}>close</button>
      </PopoverClose>
      <PopoverTrigger>
        <button style={{ backgroundColor: 'green' }}>Open</button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <div style={{ backgroundColor: 'blue' }}>
          <p>Content</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
