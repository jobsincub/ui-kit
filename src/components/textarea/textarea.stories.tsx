import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const meta = {
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['primary'],
        },
    },
    component: Textarea,
    tags: ['autodocs'],
    title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        placeholder: 'Text-area',
        disabled: false,
        variant: 'primary',
        labelText:'Text-area'
    },
}

export const Error: Story = {
    args: {
        placeholder: 'Placeholder text',
        labelText:'Text-area',
        disabled: false,
        variant: 'primary',
        error: true, // Устанавливаем error в true для отображения ошибки
        errorText: 'Error text'
    }
}