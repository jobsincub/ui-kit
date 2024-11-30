import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'div'],
    },
    children: {
      control: 'text',
    },
    color: {
      control: { type: 'select' },
      options: ['accent', 'danger', 'dark', 'light', 'success', 'warning'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'bold14',
        'bold16',
        'h1',
        'h2',
        'h3',
        'large',
        'medium',
        'regular-link',
        'regular14',
        'regular16',
        'small',
        'small-link',
        'small-semi-bold',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Пример текста по умолчанию',
  },
}

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Заголовок H1',
  },
}

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'Это пример абзаца текста.',
  },
}

export const DivWithH1Style: Story = {
  args: {
    as: 'div',
    children: 'Это div стилизованый как h1',
    variant: 'h1',
  },
}

export const Link: Story = {
  args: {
    as: 'a',
    children: 'Это пример ссылки текста.',
    href: 'https://google.com/',
    target: '_blank',
    variant: 'regular-link',
  },
}

export const WithColor: Story = {
  args: {
    children: 'Пример текста c цветом',
    color: 'success',
  },
}
