import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useRef } from 'react'

import { Typography } from './'

const meta = {
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
    asChild: true,
    children: <h1>Заголовок H1</h1>,
    variant: 'h1',
  },
}

export const Paragraph: Story = {
  args: {
    asChild: true,
    children: <p>Это пример абзаца текста.</p>,
  },
}

export const DivWithH1Style: Story = {
  args: {
    asChild: true,
    children: <div>Это div стилизованый как h1</div>,
    variant: 'h1',
  },
}

export const Link: Story = {
  args: {
    asChild: true,
    children: (
      <a href={'https://google.com/'} rel={'noreferrer'} target={'_blank'}>
        Это пример ссылки текста.
      </a>
    ),
    variant: 'regular-link',
  },
}

export const WithColor: Story = {
  args: {
    children: 'Пример текста c цветом',
    color: 'success-500',
  },
}

export const Centered: Story = {
  args: {
    align: 'center',
    asChild: true,
    children: <div>Пример текста по центру</div>,
  },
}

export const WithRef: Story = {
  render: () => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      if (ref.current) {
        console.log('Ref element:', ref.current)
        // Пример изменения стиля для демонстрации работы с ref
        ref.current.style.border = '2px solid red'
        ref.current.style.padding = '8px'
      }
    }, [])

    return (
      <Typography asChild>
        <div ref={ref}>Этот элемент демонстрирует использование рефа.</div>
      </Typography>
    )
  },
}

export const BoldWeight: Story = {
  args: {
    children: 'Пример жирного текста',
    weight: 'bold',
  },
}
