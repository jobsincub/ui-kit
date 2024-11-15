import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useRef } from 'react'

import { Typography } from './'

const meta = {
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'div'], // Добавьте или измените варианты по необходимости
    },
    children: {
      control: 'text',
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

export const WithRef: Story = {
  args: {
    as: 'div',
    children: 'Этот элемент демонстрирует использование рефа.',
  },
  render: args => {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
      if (ref.current) {
        console.log('Ref element:', ref.current)
        // Пример изменения стиля для демонстрации работы с ref
        ref.current.style.border = '2px solid red'
        ref.current.style.padding = '8px'
      }
    }, [])

    return <Typography {...args} ref={ref} />
  },
}
