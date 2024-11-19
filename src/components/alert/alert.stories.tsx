import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './'

const meta = {
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'secondary', 'tertiary', 'link'],
        },
    },
    component: Alert,
    tags: ['autodocs'],
    title: 'Components/Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        disabled: false,
        variant: 'primary',
    },
}