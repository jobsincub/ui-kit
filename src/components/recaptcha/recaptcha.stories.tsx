import { Meta, StoryObj } from '@storybook/react'

import { Recaptcha } from './recaptcha'

const meta = {
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta
type Story = StoryObj<typeof Recaptcha>

const sitekey = '6LdDzWorAAAAAPcxJrGwISEs6xoa8Pw4Zy1jCbmP'

export const Default: Story = {
  args: {
    onChange: token => console.log('Verified:', token),
    sitekey,
  },
}
export const RecaptchaWithError: Story = {
  args: {
    error: 'Please verify that you are not a robot',
    onChange: token => console.log('Verified:', token),
    sitekey,
  },
}
