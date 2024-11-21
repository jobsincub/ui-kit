// import { FormEvent, useState } from 'react'
import RecaptchaComponent from 'react-google-recaptcha'

import { Meta, StoryObj } from '@storybook/react'

import { Recaptcha } from './recaptcha'

const meta = {
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta
type Story = StoryObj<typeof Recaptcha>

export const Default: Story = {
  args: {
    children: (
      <RecaptchaComponent
        hl={'en'}
        sitekey={'6LcrEYQqAAAAAH39ZWiTbCHde_Z_-83OBxIXB7l8'}
        theme={'dark'}
      />
    ),
  },
}
