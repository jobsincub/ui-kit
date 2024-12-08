import type { Meta, StoryObj } from '@storybook/react'

import UkFlag from '../../assets/icons/components/fill/home'
import { Button } from './'

const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link', 'icon', 'linkAsBtn'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href={'https://google.com/'} rel={'noopener noreferrer'} target={'_blank'}>
        Links look like a button
      </a>
    ),
    variant: 'primary',
  },
}

export const Icon: Story = {
  args: {
    asChild: true,
    children: (
      <a href={'https://google.com/'} rel={'noopener noreferrer'} target={'_blank'}>
        <UkFlag />
        {'English'}
      </a>
    ),
    disabled: false,
    gap: 16,
    // icon: <UkFlag />,
    variant: 'link',
  },
}
