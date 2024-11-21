import { Meta, StoryObj } from '@storybook/react'

import { ReCaptcha } from './recaptcha'

const meta = {
  component: ReCaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} satisfies Meta<typeof ReCaptcha>

export default meta
type Story = StoryObj<typeof ReCaptcha>

export const Default: Story = {
  args: {
    onChange: token => console.log('Verified:', token),
    sitekey: '6LcrEYQqAAAAAH39ZWiTbCHde_Z_-83OBxIXB7l8', // тестовый ключ
  },
}
export const RecaptchaWithError: Story = {
  args: {
    isError: true,
    onChange: token => console.log('Verified:', token),
    sitekey: '6LcrEYQqAAAAAH39ZWiTbCHde_Z_-83OBxIXB7l8', // тестовый ключ
  },
}
