import type {Meta, StoryObj} from '@storybook/react'

import {Alert} from './'

const meta = {
    argTypes: {
        type: {
            options: ['error', 'completed'],
            control: {type: 'radio'}
        }
    },
    component: Alert,
    tags: ['autodocs'],
    title: 'Components/Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Error: Story = {
    args: {
        type: 'error',
        message: 'Error! Server is not available',
    },
}

export const Completed: Story = {
    args: {
        type: 'completed',
        message: 'Your settings are saved',
    }
}